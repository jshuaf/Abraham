const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const model = require('./model.js');
let head;
let foot;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true,
}));

fs.readFile('./app/public/views/head.html', { encoding: 'utf-8' }, (error, data) => {
	if (!error) {
		head = data;
	}
});

fs.readFile('./app/public/views/foot.html', { encoding: 'utf-8' }, (error, data) => {
	if (!error) {
		foot = data;
	}
});

app.use(express.static(`${__dirname}/app/public`));

app.get('/', (req, res) => {
	// res.sendFile('./app/public/views/index.html', { root: __dirname });
	fs.readFile('./app/public/views/index.html', { encoding: 'utf-8' }, (error, data) => {
		if (!error) {
			res.writeHead(200);
			res.write(head + data + foot);
			res.end();
		}
	});
});

app.post('/book', (req, res) => {
	const { bookNumber } = req.body;
	model.getBook(bookNumber, (bookInformation) => {
		res.write(JSON.stringify(bookInformation));
		res.end();
	});
});

app.listen(4000, () => {
	console.log('Example app listening on port 4000!');
});
