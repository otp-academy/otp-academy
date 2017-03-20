/*
This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.
It uses the same file the server uses to establish
the database connection:
--- server/db/index.js
The name of the database used is set in your environment files:
--- server/env/*
This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.
*/

var chalk = require('chalk');
var db = require('./server/db');
var User = db.model('user');
var Promise = require('sequelize').Promise;
var chance = require('chance')(123);

var numUsers = 15;

var seedUsers = function () {
    var users = [
        {
            first_name: 'Jane',
            last_name: 'FSA',
            email: 'testing@fsa.com',
            password: 'password',
            age: 5,
            gender: 'Female',
            ign: chance.word(),
            notes: chance.paragraph(),
            isAdmin: false
        },
        {
            first_name: 'Barack',
            last_name: 'Obama',
            email: 'obama@gmail.com',
            password: 'potus',
            age: 54,
            gender: 'Male',
            ign: chance.word(),
            notes: chance.paragraph(),
            isAdmin: true
        },
        {
            first_name: 'Mr.',
            last_name: 'Admin',
            email: 'm@m.com',
            password: 'm',
            age: 54,
            gender: 'Male',
            ign: chance.word(),
            notes: chance.paragraph(),
            isAdmin: true
        },
    ];

    function generateRandomUser() {
        var name = chance.name().split(' ');
        return {
            first_name: name[0],
            last_name: name[1],
            email: name.join('').toLowerCase()+'@otpacademy.com',
            password: 'password',
            ign: chance.word(),
            notes: chance.paragraph(),  
            age: chance.integer({min: 18, max: 70}),
            gender: chance.pickone(['Male', 'Female']),
            isAdmin: chance.bool({likelihood: 30})
        }

    }

    while (users.length <= numUsers) {
        users.push(generateRandomUser());
    }

    var creatingUsers = users.map(userObj => {
        return User.create(userObj);
    });


    return Promise.all(creatingUsers);

};

db.sync({ force: true })
    .then(function () {
        return Promise.all([seedUsers()]);
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        // process.kill(0);
    })
    .catch(function (err) {
        console.error(err);
        process.kill(1);
    });