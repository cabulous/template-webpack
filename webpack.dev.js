const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base');
const devConfig = {
  output: {
    filename: '[name].source.js',
  },
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'template title',
      template: 'templates/index.html'
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'templates'),
    hot: true,
    index: 'index.html',
    filename: '[name].source.js',
    stats: 'errors-warnings',
  },
  devtool: 'source-map',
};

module.exports = merge(baseConfig, devConfig);
