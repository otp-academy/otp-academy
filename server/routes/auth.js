const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const db = require('../db');
const User = db.model('user');

router.post('/login', (req, res, next) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(user => {
    if (!user) {
      const error = new Error('No such user found!');
      error.status = 400;
      throw error;
    }

    const passwordAttempt = User.encryptPassword(req.body.password, user.salt);
    
    if (user.password === passwordAttempt) {
      req.session.user = {
        id: user.id,
        username: user.username
      };
      res.json({
        id: user.id,
        username: user.username,
        ign: user.ign,
        champions: user.champions,
        notes: user.notes
      });
    } else {
      const error = new Error('Incorrect Password');
      error.status = 400;
      throw error;
    }
  })
  .catch(next);
});

router.post('/signup', (req, res, next) => {

})

module.exports = router;