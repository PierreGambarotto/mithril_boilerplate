var path = require('path');
var webpack = require('webpack');
// use variable in package.json
var pkg = require('./package.json');
var util = require('util');

module.exports = {
  context: path.join(__dirname, 'client'),
  entry: {
    app: ['./app.js']
  },
  devtool: 'source-map',
  output: {
      path: path.join(__dirname, pkg.config.buildDir),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
	  presets: ['es2015', 'react'],
          plugins: [["transform-react-jsx", { "pragma": "m" }]]
	}
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.jpe?g$|\.svg$|\.png$/,
        exclude: /node_modules/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  },
  plugins: [
  ]
};
