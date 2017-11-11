const path = require('path');

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "./public"),
    compress: true,
    port: 9000
  },
  watch: true
};

module.exports = config;