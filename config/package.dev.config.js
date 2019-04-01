const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./package.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractScss = new ExtractTextPlugin('/xstui.min.css')

module.exports = merge(baseWebpackConfig, {
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.scss$/i,
      loader: extractScss.extract(['css-loader', 'less-loader'])
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    extractScss
  ]
})
XPathResult
