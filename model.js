const MongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://localhost:27017/bible';
const assert = require('assert');

exports.getBook = (bookNumber, callback) => {
	MongoClient.connect(mongoURI, (dbError, db) => {
		assert.equal(null, dbError);

		let bookName = null;
		db.collection('books').findOne({ _id: bookNumber }, (collectionError, book) => {
			if (!collectionError) bookName = book.name;
		});

		const bookText = [];
		const bookDetails = {
			indents: [],
			indentIndices: [],
			jqIndices: [],
		};
		const bookNotes = [];
		db.collection('web').find({ book: bookNumber }, (collectionError, rawVerses) => {
			if (!collectionError) {
				rawVerses.sort({ _id: 1 }).toArray((error, verses) => {
					for (let i = 0; i < verses.length; i++) {
						const verse = verses[i];
						const chapter = verse.chapter;
						if (chapter > bookText.length) {
							bookText.push([]);
							bookDetails.indents.push([]);
							bookDetails.indentIndices.push([]);
							bookDetails.jqIndices.push([]);
							bookNotes.push([]);
						}
						bookText[chapter - 1].push(verse.text);
						bookDetails.indents[chapter - 1].push(verse.indent.split(',').map((x) => +x));
						bookDetails.indentIndices[chapter - 1].push(verse.indentIndices.split(',').map((x) => +x));
						bookDetails.jqIndices[chapter - 1].push(verse.jqIndices.split(',').map((x) => +x));
						bookNotes[chapter - 1].push([verse.note1, verse.note2, verse.note3].map((x) => String(x)));
					}
					db.close();
					callback({ bookName, bookText, bookDetails, bookNotes });
				});
			}
		});
	});
};
