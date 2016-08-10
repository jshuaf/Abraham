const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:4001', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		path.resolve('app/components/App.jsx'),
	],
	output: {
		path: `${__dirname}/app/public/assets/raw/`,
		publicPath: 'http://localhost:4001/',
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react'],
				exclude: /node_modules/,
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
		],
		noParse: /node_modules\/json-schema\/lib\/validate\.js/,
	},
	plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()],
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
	},
};
