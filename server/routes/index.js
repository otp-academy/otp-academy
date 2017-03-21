var router = require('express').Router();
module.exports = router;

router.use('/api', require('./api'));
router.use('/users', require('./users'));
