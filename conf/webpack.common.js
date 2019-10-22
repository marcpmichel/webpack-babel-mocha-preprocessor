const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(env) {

  return {
    context: path.join(process.cwd(), 'src'), //the home directory for webpack

    devtool: 'source-map', // enhance debugging by adding meta info for the browser devtools

    entry: {
      app: './index.js'
    },

    output: {
      path: path.join(process.cwd(), 'dist', env),
      filename: '[name].js',
      publicPath: '/',
      sourceMapFilename: '[name].map'
    },

    resolve: {
      extensions: ['.js'],  // extensions that are used
      modules: [path.join(process.cwd(), 'src'), 'node_modules'] // directories where to look for modules
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'webpack-preprocessor-loader',
            options: {
              params: {
                version: 'test'
              }
            }
          }
        }
      ]
    },

    plugins: [
      // new CleanWebpackPlugin(['dist'], {root: process.cwd()}),
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ]
  }
};
