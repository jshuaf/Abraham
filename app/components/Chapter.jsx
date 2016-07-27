import React, { PropTypes } from 'react';
import { Verse, VerseNote } from './Verse.jsx';

const Chapter = ({ text }) => {
	const verses = [];
	const noteMatcher = /\{([^}]+)\}/ig;
	const notes = [];
	for (let verseIndex = 0; verseIndex < text.length; verseIndex++) {
		let verseText = text[verseIndex];
		verses.push(<Verse text={verseText} number={verseIndex + 1} />);

		// check for notes in verse
		const matches = verseText.match(noteMatcher);
		if (matches) {
			for (let i = 0; i < matches.length; i++) {
				const match = matches[i];
				verseText = verseText.replace(match, '');
				notes.push(<VerseNote
					text={match.substr(match.indexOf('{') + 1, match.indexOf('}') - 1)}
				/>);
			}
		}
	}

	return (
		<div>
			{verses}
			{notes}
		</div>
	);
};

Chapter.propTypes = {
	number: PropTypes.number.isRequired,
	text: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
};

export default Chapter;
