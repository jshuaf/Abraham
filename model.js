const MongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://localhost:27017/bible';
const assert = require('assert');

exports.getBook = (bookNumber) => {
	MongoClient.connect(mongoURI, (dbError, db) => {
		assert.equal(null, dbError);

		let bookName = null;
		db.collection('books').findOne({ _id: bookNumber }, (collectionError, book) => {
			if (!collectionError) bookName = book.name;
		});

		const bookText = [];
		db.collection('web').find({ book: bookNumber }, (collectionError, rawVerses) => {
			if (!collectionError) {
				rawVerses.toArray((error, verses) => {
					for (let i = 0; i < verses.length; i++) {
						const verse = verses[i];
						const chapter = verse.chapter;
						if (chapter > bookText.length) {
							bookText.push([]);
						}
						bookText[chapter - 1].push(verse.text);
					}
					db.close();
					return { bookName, bookText };
				});
			}
		});
	});
};
