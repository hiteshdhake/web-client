const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       use: [
         {
           loader: 'babel-loader',
           options: {
             presets: ['es2015', 'react']
           },
         }
       ],

       exclude: [/node_modules/, /\.ejs$/, /\.html$/,]
     }
   ]
 },

 devServer: {
   port: 8080
 },

  plugins: [new HtmlWebpackPlugin({
    template: './index.html',
    inject: 'body',
    filename: 'index.html'
  })]

}
