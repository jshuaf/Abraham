const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const model = require('./model.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true,
}));

app.use(express.static(`${__dirname}/app/public`));

app.get('/', (req, res) => {
	res.sendFile('./app/public/views/index.html', { root: __dirname });
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
