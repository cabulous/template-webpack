const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasureWebpackPlugin();
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const prodConfig = {
  output: {
    filename: '[name].js',
  },
  mode: 'production',
};

module.exports = smp.wrap(merge(baseConfig, prodConfig));
