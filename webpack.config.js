const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

module.exports = {
module: {
  rules: [
    { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
},
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}