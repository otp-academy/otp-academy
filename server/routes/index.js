var router = require('express').Router();
var request = require('request');
var apiKey = require('../../secrets').DEV_API;
module.exports = router;

router.get('/', (req, res, next) => {

	var championIDsURL = 'https://na.api.pvp.net/api/lol/na/v1.2/champion?api_key='+apiKey;
	// Get list of champion IDs
	request(championIDsURL, (error, response, body) => {
		if (error) {
			console.log("Error on GET request for Riot's champion IDs list");
		}
		else {
			res.json(body);
			console.log(body);
		}
	});

});

router.use((req, res) => {
	res.status(404).end();
});