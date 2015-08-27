var request = require('request');
var Event = require('../models/event');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/textMate');

var allEvents = [];

module.exports = function(req, res, next) {

    console.log("INSIDE MODULE ___ BEFORE FUNCTION");
    findOrCreateEvent = function(eventtt) {
        console.log("what is name?" + eventtt.name.text);
        var name = eventtt.name.text;
        var id = eventtt.id;
        var description = eventtt.description.text;
        var url = eventtt.url;
        var start = eventtt.start;
        var end = eventtt.end;
        // find a user in Mongo with provided username
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
                console.log('Event already exists with that name: ' + name);
                return done(null, false, console.log('cow seems to be in existance'));
            } else {
                // if there is no user with that email
                // create the user
                var newEvent = new Event();

                // set the user's local credentials
                newEvent.name = name;
                newEvent.id = id;
                newEvent.description = description;
                newEvent.url = url;
                newEvent.start = start;
                newEvent.end = end;
                // save the user
                newEvent.save(function(err) {
                    if (err) {
                        console.log('Error in Saving user: ' + err);
                        throw err;
                    }
                    console.log('Cow Creation succesful');
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
            console.log("INSIDE FUNCTIONNNNNN");
            if (error) {
                return console.log(error);
            } else {
                var data = JSON.parse(response.body);
                var events = data.events;
                for (var i = 0; i < events.length; i++) {
                    console.log(events[i]);
                    // findOrCreateEvent(events[i]);

                    // Delay the execution of findOrCreateEvent and execute the method
                    // in the next tick of the event loop

                };
                console.log("I HAVE SUCCEEDED");
                // res.send(allEvents);
            }
        })
    })();

}