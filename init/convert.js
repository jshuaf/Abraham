const MongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://localhost:27017/bible';
const assert = require('assert');

MongoClient.connect(mongoURI, (dbError, db) => {
	assert.equal(null, dbError);
	db.collection('web').find({ $or: [
		{ indent: { $type: 'number' } },
		{ indentIndices: { $type: 'number' } },
		{ jqIndices: { $type: 'number' } },
	] }).each((error, verse) => {
		if (error) {
			console.log('ERROR:', error);
		} else if (verse) {
			verse.indent += '';
			verse.indentIndices += '';
			verse.jqIndices += '';
			db.collection('web').save(verse);
		} else {
			db.close();
		}
	});
});
