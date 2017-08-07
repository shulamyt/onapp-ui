var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var port = 8080;
var host = 'localhost';

new WebpackDevServer(webpack(config), {
		host: host,
		https: false,
		stats: 'verbose',
		compress: true,
		clientLogLevel: 'none',
		contentBase: process.cwd(),
		watchContentBase: true,
		hot: true,
		publicPath: '/',
		quiet: true,
		inline: true,
		overlay: false,
		watchOptions: {
			aggregateTimeout: 100,
			ignored: /node_modules/
		}
	}).listen(port, host, function (err, result) {
	if (err) {
		console.log(err);
	}
	http://localhost:8080/
	console.log('http://' + host + ':' + port + '/');
});