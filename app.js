const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/app/public`));

app.get('/', (req, res) => {
	res.sendFile('./app/public/views/index.html', { root: __dirname });
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});
