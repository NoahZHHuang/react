const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPlugin = new HtmlWebpackPlugin({
	template: path.resolve(__dirname, './app/index.html'),
	filename: 'index.html',
	inject: 'body'
});


module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: [ 'style-loader', 'css-loader', 'less-loader']
			}
		]
	},
	devServer: {
		inline: true,
		port: 8008
	},
	plugins: [
		HTMLWebpackPlugin
	]
};