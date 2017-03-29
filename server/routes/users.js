'use strict';
var router = require('express').Router();
var db = require('../db');
var User = db.model('user');
var Auth = require('../configure/auth-middleware');

// router.get('/', Auth.assertAdmin, function (req, res) {
router.get('/', function (req, res) {
    User.all()
    .then(users => {
        res.json(users);
    });
});

router.param('userId', function(req, res, next, userId) {
    User.findById(userId)
    .then(user => {
        if (!user) {
            res.status(404);
            throw next(new Error('User not found.'));
        }
        else {
            req.requestedUser = user;
            next();
        }
    })
    .catch(next);
});

router.get('/:userId/champions', function (req, res) {
    res.json(req.requestedUser.champions);
});

router.get('/:userId', function (req, res) {
    res.json(req.requestedUser);
});

router.put('/:userId/champions', function (req, res, next) {
    if (Object.keys(req.body).length === 0) return;
    var updatedChampions = req.requestedUser.champions;
    updatedChampions.push(req.body.champion);
    // updatedChampions.sort();
    req.requestedUser.updateAttributes({
        champions: updatedChampions
    })
    .then(function(user) {
        res.json(user.champions);
    });
});

router.put('/:userId', function (req, res, next) {
    req.requestedUser.update(req.body)
    .then(function(user) {
        res.send(user);
    })
    .catch(next);
});

router.delete('/:userId/champions', function (req, res, next) {
    if (Object.keys(req.body).length === 0) return;
    var updatedChampions = req.requestedUser.champions;
    var index = updatedChampions.find(req.body.champion);
    updatedChampions.splice(index, 1);
    req.requestedUser.updateAttributes({
        champions: updatedChampions
    })
    .then(function(user) {
        res.json(user.champions);
    });
});

router.delete('/:userId', function(req, res, next) {
    req.requestedUser.destroy()
    .then(function() {
        res.sendStatus(204)
    })
    .catch(next);
})

module.exports = router;