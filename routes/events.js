var request = require('request');

var allEvents = [];

module.exports = function(req, res, next) {

	console.log("INSIDE MODULE ___ BEFORE FUNCTION");

	(function hitEBup(){
		request({
			url: process.env.MY_OWNED_EVENTS + process.env.EB_PERSONAL_AUTH_TOKEN,
			method: 'GET'
			}, function(error, response, body){
				console.log("INSIDE FUNCTIONNNNNN");
				if (error) {
					return console.log(error);
				} else {
					var data = JSON.parse(response.body);
					var events = data.events;
					for (var i = 0; i < events.length; i++) {
					    var event = {
					      name: events[i].name.text,
					      description: events[i].description.text,
					      id: events[i].id,
					      url: events[i].url,
					      start: events[i].start.local,
					      end: events[i].end.local
					  }
					  if (!eventDoesExist(event, allEvents)) {
					  	allEvents.push(event);
					  } else {
					  	console.log("EVENT EXISTS");
					  }
					};
					res.send(allEvents);
				}
		})
	})();

	function eventDoesExist(obj, list) {
	    var i;
	    for (i = 0; i < list.length; i++) {
	        if (list[i] === obj) {
	            return true;
	        }
	    }
	    return false;
	}



}