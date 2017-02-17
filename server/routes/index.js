var router = require('express').Router();
var request = require('request');
var apiKey = require('../../secrets').DEV_API;
module.exports = router;

router.get('/version', (req, res, next) => {
	var leagueVersionsURL = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/versions?api_key='+apiKey;
	// Get latest league version
	// Use latest league version to get champion images
	request(leagueVersionsURL, (error, response, body) => {
		if (error) {
			console.log("Error on GET request for Riot's league versions list");
		}
		else {
			// Parse for latest version
			var currentVersion = body.split(',')[0];
			// Remove the Array char '['
			currentVersion = currentVersion.slice(1, currentVersion.length);
			// Remove excess quotes
			currentVersion = currentVersion.replace(/"/g, '');
			res.send(currentVersion);
		}
	});
});


router.get('/champions', (req, res, next) => {
	var championsURL = 'https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key='+apiKey;
	// Get list of champion IDs
	request(championsURL, (error, response, body) => {
		if (error) {
			console.log("Error on GET request for Riot's champion list");
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