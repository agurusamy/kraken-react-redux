var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './public/main.js',
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        loader: [
          {
            loader: 'style-loader',
            query: {
              sourceMap: 1
            }
          },
          {
            loader: 'css-loader',
            query: {
              publicPath: '../',
              paths: [
                path.resolve(__dirname)
              ]
            }
          },
          {
            loader: 'less-loader',
            options: {
              paths: [
                path.resolve(__dirname)
              ]
            }
          }
        ]
      },
      {
          // do not exclude `node_modules` because of `react-intl-tel-input`
          test: /\.png$/i,
          loader: 'file?name=[name].[ext]'
      },
      {
          test: /\.woff(2)?$/,
          loader: 'url?limit=10000&mimetype=application/font-woff&name=[name].[ext]'
      },
      {
          test: /\.ttf$/, loader: 'file?name=[name].[ext]'
      },
      {
          test: /\.eot$/, loader: 'file?name=[name].[ext]'
      },
      {
          test: /\.svg$/, loader: 'file?name=[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less']
  },
  plugins: [
    new ExtractTextPlugin('./css/materialize.css'),
    new ExtractTextPlugin('./css/react-range.css'),
    new ExtractTextPlugin('./css/style.css'),
  ]
};
