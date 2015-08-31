import path from 'path'
import webpack from 'webpack'
import { entryPoint, jsLoader, autoprefixerLoader } from './baseConfig'
import config from '../config'

const webpackDevServerAddress = `http://localhost:${config.webpackDevPort}`
const cssLoaderForDev = `style-loader!css-loader!${autoprefixerLoader}`

// Development version doesn't need external react and ExtractTextPlugin
export default {
  devtool: 'eval',
  entry: [
    `webpack-dev-server/client?${webpackDevServerAddress}`,
    'webpack/hot/only-dev-server',
    entryPoint
  ],
  output: {
    path: process.env['PUBLISHPATH'] || config.publishPath,
    filename: 'bundle.js',
    publicPath: `${webpackDevServerAddress}/assets/`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })
  ],
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: `react-hot-loader!${jsLoader}`, exclude: /node_modules/ },
      { test: /\.css$/, loader: cssLoaderForDev },
      { test: /\.less$/, loader: `${cssLoaderForDev}!less-loader` }
    ]
  }
}
