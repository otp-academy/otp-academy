var router = require('express').Router();
var request = require('request');
var apiKey = require('../../secrets').DEV_API;
module.exports = router;

router.get('/', (req, res, next) => {
	var leagueVersionsURL = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/versions?api_key='+apiKey;
	// Get latest league version
	// Use latest league version to get champion images
	request(leagueVersionsURL, (error, response, body) => {
		if (error) {
			console.log("Error on GET request for Riot's league versions list");
		}
		else {
			res.send(body[0]);
		}
	});

	var championIDsURL = 'https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key='+apiKey;
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