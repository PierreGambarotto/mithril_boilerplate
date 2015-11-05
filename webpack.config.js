var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');// use variable in package.json
var util = require('util');
var bootstrap = require('bootstrap-styl');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: 'style!css?sourceMap!stylus?sourceMap'
//        loader: ExtractTextPlugin.extract('css!stylus')
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'url'
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
  stylus: {
    use: [bootstrap()],
    'resolve url': true

  },
  plugins: [
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    })
  ]
};
