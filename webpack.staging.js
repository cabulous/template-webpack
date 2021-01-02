const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const stagingConfig = {
  output: {
    filename: '[name].js',
  },
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: true,
    }),
  ],
  devtool: 'inline-source-map',
};

module.exports = merge(baseConfig, stagingConfig);
