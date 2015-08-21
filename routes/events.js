var express = require('express');
var router = express.Router();
var request = require('request');
var ebUrl = "https://www.eventbriteapi.com/v3/users/me/owned_events?token=MGFZ4C7MMBDVQURVPW6X";



// 	GET EVENTS AND STORE IN AN ARRAY
router.get('/', function(req, res) {
	request(ebUrl, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	var data = JSON.parse(response.body);
	  	var allEvents = [];
	  	eventIds = [];
	  	for (var i = 0; i < data["events"].length; i++) {
	  		allEvents.push(data["events"][i]);
	  		eventIds.push(data["events"][i].id);
	  		console.log(eventIds);
	  	};
	  	res.status(200).json(allEvents);
	  }
	})
});

router.get('/id', function(req, res) {
	request(ebUrl, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	var data = JSON.parse(response.body);
	  	var allEvents = [];
	  	for (var i = 0; i < data["events"].length; i++) {
	  		allEvents.push(data["events"][i]);
	  		console.log(allEvents);
	  	};
	  	res.status(200).json(allEvents);
	  }
	})
});








module.exports = router;


