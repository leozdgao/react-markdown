import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import yargs from 'yargs'

// create babel cache directory
const babelCache = path.resolve(path.join(__dirname, '../.babel-cache'))
if (!fs.existsSync(babelCache)) {
  try {
    fs.mkdirSync(babelCache)
  } catch (err) {
    if (err.code !== 'EEXIST') {
      console.error(err.stack)
    }
  }
}

// app entry file
export const entryPoint = './demo/browser.js'

// concat js loader
export const jsLoader = `babel-loader?cacheDirectory=${babelCache}`
export const autoprefixerLoader = `autoprefixer-loader?browsers=last 2 versions`
export const cssLoader = `css-loader?sourceMap${autoprefixerLoader}`

// options
export const options = yargs
  .alias('p', 'optimize-minimize') // production mode
  .alias('d', 'debug') // development mode
  .option('port', {
    default: '8080',
    type: 'string'
  })
  .argv

export const externals = {
  'react': 'React',
  'marked': 'marked',
}
