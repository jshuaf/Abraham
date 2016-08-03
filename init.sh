#!/bin/bash
for path in raw/versions/*.csv; do
	file_with_extension=${path: -7}
	file=${file_with_extension:0:3}
	mongoimport -d bible -c $file --type csv --file $path --fields _id,book,chapter,verse,text,indent,indentIndices,jqIndices,note1,note2,note3
done

mongoimport -d bible -c books --type csv --file raw/books.csv --fields _id,name,testament,genre
