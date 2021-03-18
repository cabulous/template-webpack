const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const stagingConfig = {
  output: {
    filename: '[name].js',
  },
  mode: 'production',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'staging',
      DEBUG: true,
    }),
  ],
  devtool: 'cheap-source-map',
};

module.exports = merge(baseConfig, stagingConfig);
