const path = require('path');
const _ = require('lodash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackConfig = require('./webpack.base.config');

const config = _.merge(webpackConfig.config, {
  mode: 'production',
  performance: {
    hints: false
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/**/*.html'),
        to: path.resolve(__dirname, 'dist')
      }, {
        from: path.resolve(__dirname, 'src/assets/libs/*'),
        to: path.resolve(__dirname, 'dist')
      }
    ]),
    new CleanWebpackPlugin(['dist'])
  ]
});

config.plugins = config.plugins.concat(webpackConfig.plugins);

module.exports = config;
