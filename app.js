const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const model = require('./model.js');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const app = express();

let head;
let foot;

// Parse files when serving
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true,
}));

// Webpack Dev Server

if (!process.argv.includes('--production')) {
	new WebpackDevServer(webpack(config), {
		publicPath: config.output.publicPath,
		hot: true,
		historyApiFallback: true,
		proxy: {
			'*': 'http://localhost:4000',
		},
	}).listen(4001, 'localhost', (err) => {
		if (err) {
			return console.error(err);
		}
		return true;
	});
}

// Add the reused files
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

// Serve static assets
app.use(express.static(`${__dirname}/app/public`));

app.use(cors({ origin: 'http://localhost:4000' }));

// Responses
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

app.post('/book', cors({ origin: 'http://localhost:4001' }), (req, res) => {
	const { bookNumber } = req.body;
	model.getBook(bookNumber, (bookInformation) => {
		res.write(JSON.stringify(bookInformation));
		res.end();
	});
});

app.listen(4000, () => {
	console.log('Listening on port 4000.');
});
