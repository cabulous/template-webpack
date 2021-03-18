const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base');
const devConfig = {
  output: {
    filename: '[name].source.js',
  },
  mode: 'development',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'template title',
      template: 'templates/index.html'
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'templates'),
    host: '127.0.0.1',
    hot: true,
    index: 'index.html',
    filename: '[name].source.js',
    stats: 'errors-warnings',
  },
  devtool: 'source-map',
};

module.exports = merge(baseConfig, devConfig);
