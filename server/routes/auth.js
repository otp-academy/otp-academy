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
      console.log('asdfdsfasf', req.session);
      res.json({
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
  if (req.body.password !== req.body.reenterPassword) {
    const error = new Error('You reentered your password incorrectly');
    error.status = 400;
    next(error);
    return;
  }

  User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(function (user) {
    if (user) {
      const error = new Error('Username already taken');
      error.status = 400;
      throw error;
    }
    return User.create({
      username: req.body.username,
      password: req.body.password
    });
  })
  .then(function (user) {
    req.session.user = {
      id: user.id,
      username: user.username
    };
    res.json({
      id: user.id,
      username: user.username,
      champions: user.champions,
      notes: user.notes
    });
  })
  .catch(next);
});

router.get('/session', (req, res, next) => {
  if (!req.session.user || !req.session.user.id) {
    const error = new Error('You are not logged in');
    error.status = 400;
    next(error);
    return;
  }

  User.findById(req.session.user.id)
  .then(function (user) {
    res.json({
      username: user.username,
      ign: user.ign,
      champions: user.champions,
      notes: user.notes
    })
  })
  .catch(next);
});

router.get('/logout', (req, res, next) {
  req.session.destroy();
  res.json({
    message: 'Logged out successfully'
  });
});

module.exports = router;