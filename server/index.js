/* eslint-disable */
const express = require('express');
const path = require('path');
const port = 9000;

const app = express();

app.get('/advertisements', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.sendFile(path.join(__dirname, '../assets/advertisements.json'));
});

app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});
