/* eslint-disable */
require("babel-core/register")

var webpackConfig = require('./webpack/webpack')
webpackConfig.output.filename = 'react-markdown.min.js'

module.exports =webpackConfig
