const path = require('path');
const express = require('express');
const port = process.env.port || 8080;

const app = express();

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:',port);
});
