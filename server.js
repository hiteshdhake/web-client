const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const port = process.env.port || 8080;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler))

// app.get('*', (req, res) => (res).sendFile(path.join(__dirname, 'dist/index.html')));

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:',port);
});
