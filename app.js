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
	const { bookNumber } = req;
	res.end(JSON.stringify(model.getBook(bookNumber)));
});

app.listen(4000, () => {
	console.log('Example app listening on port 4000!');
});
