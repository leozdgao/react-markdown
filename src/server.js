/* eslint-disable */
require("babel-core/register")

var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var webpackDevConfig = require('../webpack/webpack.dev')
var config = require('../config')
var webpackDevPort = config.webpackDevPort

new WebpackDevServer(webpack(webpackDevConfig), {
  contentBase: './src',
  publicPath: webpackDevConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(webpackDevPort, 'localhost', function (err, result) {
  if (err) console.log(err)
  else console.log('Listening at localhost:' + webpackDevPort)
})
