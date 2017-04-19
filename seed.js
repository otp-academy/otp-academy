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

const chalk = require('chalk');
const db = require('./server/db');
const User = db.model('user');
const Promise = require('sequelize').Promise;
const chance = require('chance')(123);

const numUsers = 15;

const seedUsers = function () {
    const users = [
        {
            username: 'testing',
            password: 'password',
            champions: ['Ahri', 'Tryndamere', 'Kennen'],
            ign: chance.word(),
            notes: JSON.stringify({
                'Ahri': {
                    'Teemo': 'Against Teemo, can trade at level 1, 4, and 6',
                    'Irelia': chance.paragraph()
                },
                'Tryndamere': {
                    'Jayce': 'Play passive until the game ends'
                }
            })
        },
        {
            username: 'obama',
            password: 'potus',
            champions: ['Aatrox', 'Heimerdinger'],
            ign: chance.word(),
            notes: JSON.stringify({
                'Aatrox': {
                    'Darius': 'Ask for ganks, can proc bloodwell and let jungler clean up'
                },
                'Heimerdinger': {
                    'Shaco': 'make turrets to fight shacos boxes'
                }
            })
        },
        {
            username: 'mm',
            password: 'm',
            champions: ["Kha'zix", 'awhdoiawhd', 'Tryndamere'],
            ign: chance.word(),
            notes: JSON.stringify({
                'Tryndamere': {
                    'Darius': 'Pull the wave and ask for ganks. Outscale him late game.'
                }
            })
        },
    ];

    function generateRandomUser() {
        const name = chance.word() + chance.word();
        return {
            username: name.toLowerCase(),
            password: 'password',
            ign: chance.word()
        };
    }

    while (users.length <= numUsers) {
        users.push(generateRandomUser());
    }

    const creatingUsers = users.map(userObj => {
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