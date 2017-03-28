var jwt = require('jsonwebtoken');
var router = require('express').Router();
module.exports = router;

var db = require('../db');
var User = db.model('user');

router.use('/api', require('./api'));
router.use('/users', require('./users'));
router.post('/login', (req, res) => {
	const userInfo = req.body;
	// var token = jwt.sign({ 
	// 	sub : "1234567890",
	// 	name : "Ado Kukic",
	// 	admin: true 
	// }, 'secret', { expiresIn: '24h' });
	User.findOne({
		where: {
			email: userInfo.username
		}
	})
	.then(userData => {
		res.send(userData);
	})
});