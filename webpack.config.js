const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  plugins: [
    new Dotenv({
      path: './.env'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}