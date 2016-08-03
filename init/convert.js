const MongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://localhost:27017/bible';
const assert = require('assert');

MongoClient.connect(mongoURI, (dbError, db) => {
	assert.equal(null, dbError);
	db.collection('web').find({ $or: [
		{ 'indent': { $type: 'number' } },
		{ 'indent_indices': { $type: 'number' } },
		{ 'jesus_indices': { $type: 'number' } },
	] }).each((error, verse) => {
		if (error) {
			console.log('ERROR:', error);
		} else if (verse) {
			verse.indent += '';
			verse.indent_indices += '';
			verse.jesus_indices += '';
			db.collection('web').save(verse);
		} else {
			db.close();
		}
	});
});
