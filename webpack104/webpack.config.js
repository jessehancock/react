
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader', 'sass-loader']
      })
    },
      {
        test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
      }

      ]
    },
    devServer: {
      contentBase: __dirname +"dist",
      compress: true,
      // port: 9000, //this would make a custom port
      stats:'errors-only', //shortens what prints out when it starts
      open: true //opens a new window
    },
   plugins: [
     new HtmlWebpackPlugin({
      title: 'Project Demo',
      // minify: {
      //   collapseWhitespace: true
      // },
      hash: true,
      template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
    }),
    new ExtractTextPlugin('app.css')
]
}﻿
