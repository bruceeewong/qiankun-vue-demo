const { name } = require('./package')

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    port: 3001,
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget:'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
} 