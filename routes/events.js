var request = require('request');
var Event = require('../models/event');


module.exports = function(req, res, next) {

    findOrCreateEvent = function(eventtt) {
        console.log("what is name?" + eventtt.name.text);
        var name = String(eventtt.name.text);
        var id = String(eventtt.id);
        var description = String(eventtt.description.text);
        var url = String(eventtt.url);
        var start = String(eventtt.start);
        var end = String(eventtt.end);
        // find an event in Mongo with provided event name
        Event.findOne({
            'name': name
        }, function(err, eventtt) {
            // In case of any error, return using the done method
            if (err) {
                console.log('Error in SignUp: ' + err);
                return done(err);
            }
            // already exists
            if (eventtt) {
                return console.log('no need to add event ' + name);
            } else {
                // if there is no event with that name
                // create the event
                var newEvent = new Event();

                // set the event's local credentials
                newEvent.name = name;
                newEvent.id = id;
                newEvent.description = description;
                newEvent.url = url;
                newEvent.start = start;
                newEvent.end = end;
                // save the e
                newEvent.save(function(err) {
                    if (err) {
                        console.log('Error in Saving event: ' + err);
                        throw err;
                    }
                    allEvents.push(newEvent);
                    console.log( name + ' was added to database');
                    return done(null, newEvent);
                });
            }
        });
    };

    (function hitEBup() {
        request({
            url: process.env.MY_OWNED_EVENTS + process.env.EB_PERSONAL_AUTH_TOKEN,
            method: 'GET'
        }, function(error, response, body) {
            if (error) {
                return console.log(error);
            } else {
                var data = JSON.parse(response.body);
                var events = data.events;
                for (var i = 0; i < events.length; i++) {
                    findOrCreateEvent(events[i]);
                };
                console.log("SUCCESS");
                res.status(200).json("It worked!");
            }
        })
    })();

}