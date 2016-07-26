const path = require('path');

module.exports = {
	entry: path.resolve('app/components/App.jsx'),
	output: { path: 'app/public/assets', filename: 'bundle.js' },
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react'],
				},
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
		],
		noParse: /node_modules\/json-schema\/lib\/validate\.js/,
	},
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
	},
};
