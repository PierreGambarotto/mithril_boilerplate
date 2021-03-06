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
  devServer: {
    proxy: {
      '*': 'http://localhost:3000'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?presets=es2015!msx?harmony=false&precompile=false'
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: 'style!css?sourceMap!stylus?sourceMap&resolve url'
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
//    'resolve url': true

  },
  plugins: [
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    })
  ]
};
