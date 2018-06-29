const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');
const webpackConfig = require('./webpack.base.config');

const config = _.merge(webpackConfig.config, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    port: 9000,
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

config.plugins = config.plugins.concat(webpackConfig.plugins);

module.exports = config;