from bs4 import BeautifulSoup
import requests
import csv
import os
import sys
import re
import pickle


def parse(soup):
    # parse a bible.com Youversion webpage into
    # a dictionary of details for each verse
    indents = {}
    jesus = {}
    notes = {}
    chapter = soup.find('div', class_='chapter')

    # each section of a certain indent is within a div tag with a certain class
    # iterate over these divs here
    for section in chapter.find_all('div', {
        'class': ['q', 'q2', 'p', 'nb', 'm', 'mi', 'pi', 'li']
    }):

        # set the default indent for the non-first span
        indent_class = section['class'][0]
        line = None

        # within each div, there are spans with the verse tag
        # some of these have no content, however...
        # and only the first span has the indent of its div section
        for candidate_line in section.find_all('span', class_='verse'):

            # initialize indent checking
            current_verse = candidate_line['class'][1][1:]
            current_verse_indents = []
            if current_verse not in indents:
                indents[current_verse] = []

            content_string = ''

            for content in candidate_line.find_all('span', {'class': ['content']}):
                indent = '0.5' if indent_class == 'pi' else '0'
                if not content.string:
                    content.string = content.contents[0].encode('utf-8')
                elif len(content.string) > 1:
                    if not line:
                        line = candidate_line
                        if indent_class == 'p' or indent_class == 'pi':
                            indent = '1'
                        elif indent_class == 'q':
                            indent = '2'
                        elif indent_class == 'q2':
                            indent = '3'
                        elif indent_class == 'm':
                            indent = '-1'
                        elif indent_class == 'mi' or indent_class == 'li':
                            indent = '0.5'

                # store the actual verse text
                current_content_string = content.string.encode('utf-8')
                if len(current_content_string) > 1:
                    if len(content_string):
                        if not(content_string[-1] == ' ' or current_content_string[0] == ' '):
                            content_string += ' '
                    content_string += current_content_string

                # check if they are quotes from Jesus
                if content.parent['class'][0] == 'wj':
                    if current_verse not in jesus:
                        jesus[current_verse] = []
                    jesus[current_verse].append(current_content_string)

            # only add if the values are there
            if indent and content_string:
                current_verse_indents.append((indent, content_string))
                indents[current_verse] += current_verse_indents

            # add verse notes
            for note in candidate_line.find_all('span', {'class': 'ft'}):
                if current_verse not in notes:
                    notes[current_verse] = []
                note_string = note.string.encode('utf-8')
                if note_string not in notes[current_verse]:
                    notes[current_verse].append(note_string)
    return {
        'indents': indents,
        'jesus': jesus,
        'notes': notes
    }


def trim_string(s):
    if s[0] == ' ':
        return trim_string(s[1:])
    elif s[-1] == ' ':
        return trim_string(s[:-1])
    else:
        return s


def clean_string(s):
    s = trim_string(s)
    s = re.sub(r'[,]+(?![ ])', r', ', s)
    s = trim_string(s)
    return s


def sublist_indices(l, sl):
    sll = len(sl)
    for ind in (i for i, e in enumerate(l) if e == sl[0]):
        if l[ind:ind+sll] == sl:
            return ind, ind+sll
    return None

base_url = 'https://www.bible.com'
current_chapter = 0
current_book = 0
next_book_url = '/bible/206/gen1.web'

output = []
os.chdir(sys.path[0])

with open('raw/versions/web.csv', 'r') as verse_input:
    reader = csv.reader(verse_input)
    header = next(reader)
    header += ['indent', 'indent_indices', 'jesus_indices', 'note1', 'note2', 'note3']
    output.append(header)

    for verse_data in reader:
        current_output = verse_data[:]
        book, chapter, verse = verse_data[1:4]

        if chapter != current_chapter or book != current_book:
            print("Book %r, Chapter %r" % (book, chapter))
            current_book_url = next_book_url
            soup = BeautifulSoup(requests.get(base_url + current_book_url).content)
            next_book_url = soup.find("a", {"class": "next"})['href']

            current_chapter = chapter
            current_book = book
            parsed = parse(soup)
            indents = parsed['indents']
            jesus = parsed['jesus']
            notes = parsed['notes']

        # check for indents
        try:
            verse_indents = indents[verse]
        except KeyError:
            print("ERROR: could not find verse %r" % verse)
            current_output[4] = ''
            current_output += ['', '', '']
            output.append(current_output)
            continue

        current_indents = []
        current_indent_indices = []
        current_verse_string = ''

        for verse_indent in verse_indents:
            section_length = len(clean_string(verse_indent[1]).split(' '))
            current_indents.append(verse_indent[0])
            if len(current_indent_indices) == 0:
                current_indent_indices.append(0)
            current_indent_indices.append(current_indent_indices[-1] + section_length)
            if current_verse_string:
                if not(current_verse_string[-1] == ' ' or verse_indent[1] == ' '):
                    current_verse_string += ' '
            current_verse_string += verse_indent[1]

        current_output.append(','.join(current_indents))
        current_output.append(','.join(map(str, current_indent_indices[:-1])))
        current_output[4] = current_verse_string

        # check for jesus quotes
        if verse in jesus:
            jesus_indices = []
            current_verse_string = clean_string(current_verse_string)
            current_verse_parts = current_verse_string.split(' ')
            for quote in jesus[verse]:
                quote_parts = clean_string(quote).split(' ')
                quote_indices = sublist_indices(current_verse_parts, quote_parts)
                if quote_indices:
                    if jesus_indices:
                        if quote_indices[0] == jesus_indices[-1]:
                            jesus_indices = jesus_indices[:-1] + [quote_indices[1]]
                            continue
                    jesus_indices += quote_indices
                else:
                    print("ERROR: STRINGS DON'T MATCH", quote, current_verse_string)
            if jesus_indices:
                current_output.append(','.join(map(str, jesus_indices)))
            else:
                current_output.append('0')
        else:
            current_output.append('0')

        # check for notes
        if verse in notes:
            verse_notes = []
            if len(notes[verse]) > 3:
                print("ERROR: more than three notes in a single verse", verse, notes[verse])
            for note in notes[verse][:3]:
                verse_notes.append(re.sub(r'(?i)<span[^>]*>', r'', note))
            for i in range(3 - len(verse_notes)):
                verse_notes.append('')
            current_output += verse_notes
        else:
            current_output += ['', '', '']

        output.append(current_output)

    verse_input.close()

with open('test.csv', 'w') as test:
    writer = csv.writer(test)
    writer.writerows(output)
    test.close()
