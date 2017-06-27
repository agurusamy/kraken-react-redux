var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

// const extractTextPlugin = new ExtractTextWebpackPlugin({filename: '../css/[name].css', ignoreOrder: true });

const VENDOR_LIBS = ['redux-promise', 'faker', 'lodash', 'react','redux','react-dom', 'redux-thunk', 'react-input-range']

module.exports = {
  entry: {
    bundle: './public/app.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        use: 'html-loader',
        test: /\.html$/
      }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor', 'manifest']
    // }),
    new CopyWebpackPlugin([{
      from: 'style',
      to: '../css'
    }])
  ]
};
