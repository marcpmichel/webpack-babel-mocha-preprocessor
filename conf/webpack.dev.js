const webpack = require('webpack');
const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');


module.exports = function(env) {
  return Merge(CommonConfig(env), {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: true,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: false,
        comments: true
      })
    ]
  });
}

