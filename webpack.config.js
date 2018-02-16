var HtmlWebpackPlugin = require('html-webpack-plugin')


var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool:'sourcemap',
  entry: [
    './app/index.js'
  ],  
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  plugins: [HTMLWebpackPluginConfig]
};
