const MongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://localhost:27017/test';
const assert = require('assert');

exports.getBook = (bookNumber) => {
	MongoClient.connect(mongoURI, (err, db) => {
		assert.equal(null, err);
		const bookName = db.collection('books').findOne({ _id: bookNumber }).name;
		const rawVerses = db.collection('web').find({ bookNumber });
		const bookText = [];
		for (const rawVerse of rawVerses) {
			const chapter = rawVerse.chapter;
			if (chapter > bookText.length) {
				bookText.push([]);
			}
			bookText[chapter - 1].push(rawVerse.text);
		}
		console.log(bookName, bookText);
		db.close();
		return { bookName, bookText };
	});
};
