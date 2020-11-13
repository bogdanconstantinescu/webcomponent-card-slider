const webpackConfig = require('./webpack.config');
const path = require('path');

module.exports = {
  ...webpackConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    hot: true,
    host: process.env.HOST || 'localhost',
    port: 3000,
    // Public path is root of content base
    publicPath: '/',
  },
}
