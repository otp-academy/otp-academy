'use strict';
var db = require('./_db');

require('./models/user')(db);

var User = db.model('user');

module.exports = db;