// create simple api with node.js
 
const express = require('express');
const app = express();
const port = 3000;
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// create post api
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

// test api
app.get('/test', (req, res) => {
  res.send('This is test api');
}
);

// how to run serve and test api
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}
);

// now i need to use terminal run something?
// node WhiteSpire.js

// how to fix Error: Cannot find module 'express'
// npm install express



