import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { options, jsLoader, cssLoader, entryPoint, externals } from './baseConfig'

export default {
  devtool: 'source-map',
  entry: entryPoint,
  externals,
  output: {
    path: process.env['PUBLISHPATH'] || config.publishPath,
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ],
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: jsLoader, exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', cssLoader) },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style', `${cssLoader}!less-loader`) }
    ]
  }
}
