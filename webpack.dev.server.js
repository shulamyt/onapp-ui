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
		historyApiFallback: {
			rewrites: [
				{
					from: /^\/search\/.*$/,
					to: function() {
						return 'index.html';
					}
				}
			]
		},
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
		},
		proxy:{
			'/services': {
				target: 'http://localhost:4000',
				pathRewrite: {
					'/services': ''
				}
			}
    	}
	}).listen(port, host, function (err, result) {
	if (err) {
		console.log(err);
	}
	console.log('http://' + host + ':' + port + '/');
});