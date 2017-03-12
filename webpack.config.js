var webpack = require('webpack')
var path = require('path')
var fs = require('fs')
module.exports = {
  devtool: "source-map",
  entry: {
    chess: './src/index.js'
  },
  output: {
      path: "./dist/",
      filename: "[name].js",
      publicPath: "/dist/"
  },
  externals:{
    PIXI: 'pixi'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
}
