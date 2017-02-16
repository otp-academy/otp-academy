const express = require('express');
const morgan = require('morgan');
const path = require('path');
const apiKey = require('../secrets').DEV_API;
const env = process.env.NODE_ENV;

const app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/../public/'));

app.use('/api', require('./routes'));

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port ' + port);
});