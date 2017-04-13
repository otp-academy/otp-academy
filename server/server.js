const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const secrets = require('../secrets');
const env = process.env.NODE_ENV;

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(session({
  secret: secrets.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));

// app.use((req, res, next) => {
//   console.log(req.session);
//   next();
// });

app.use(express.static(__dirname + '/../public/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./routes'));

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  err.message = err.message;
  console.log('asdfdsfdsaf',err.message)
  console.log(err);
  res.status(err.status).json(err);
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});