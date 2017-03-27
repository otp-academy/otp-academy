var jwt = require('jsonwebtoken');
var router = require('express').Router();
module.exports = router;

var User = require('../db/models/user');

router.use('/api', require('./api'));
router.use('/users', require('./users'));
router.post('/login', (req, res) => {
	console.log(req.body)
	// var token = jwt.sign({ 
	// 	sub : "1234567890",
	// 	name : "Ado Kukic",
	// 	admin: true 
	// }, 'secret', { expiresIn: '24h' });
	User.findOne({
		where: {

		}
	})
	.then(userData => {
		res.send(userData);
		res.redirect('/');
	})
});