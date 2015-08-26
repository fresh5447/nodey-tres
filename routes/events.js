var request = require('request');
var Event = require('../models/event');

var allEvents = [];

module.exports = function(req, res, next) {

    console.log("INSIDE MODULE ___ BEFORE FUNCTION");

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
                    console.log("MADE IT INSIDE FOR LOOP");
                    var name = events[i].name.text;
                    var description = events[i].description.text;
                    var url = events[i].url;
                    var start = events[i].start;
                    var end = events[i].end;

                    initFoC();
                    // Delay the execution of findOrCreateEvent and execute the method
                    // in the next tick of the event loop

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


    function findOrCreateEvent() {
        // find a event in Mongo with provided name
        Event.findOne({
            'name': name
        }, function(err, event) {
            // In case of any error, return using the done method
            if (err) {
                console.log('Error in SignUp: ' + err);
                return done(err);
            }
            // already exists
            if (event) {
                console.log('Event already exists with name: ' + name);
                return done(null, false, req.flash('message', 'Event Already Exists'));
            } else {
                // if there is no event with that name
                // create the event
                var newEvent = new Event();

                // set the user's local credentials
                newEvent.name = events[i].name.text
                newEvent.description = events[i].description.text;
                newEvent.id = events[i].id;
                newEvent.url = events[i].url;
                newEvent.start = events[i].start.local;
                newEvent.end = events[i].end.local;

                // save the user
                newEvent.save(function(err) {
                    if (err) {
                        console.log('Error in Saving user: ' + err);
                        throw err;
                    }
                    console.log('Event Creation succesful');
                    allEvents.push(newEvent);
                    return done(null, newEvent);
                });
            }
        });
    };

    initFoC = function(name, done) {

        function findOrCreateEvent() {
            // find a event in Mongo with provided name
            Event.findOne({
                'name': name
            }, function(err, event) {
                // In case of any error, return using the done method
                if (err) {
                    console.log('Error in SignUp: ' + err);
                    return done(err);
                }
                // already exists
                if (event) {
                    console.log('Event already exists with name: ' + name);
                    return done(null, false, req.flash('message', 'Event Already Exists'));
                } else {
                    // if there is no event with that name
                    // create the event
                    var newEvent = new Event();

                    // set the events details
                    newEvent.name = name
                    newEvent.description = description;
                    newEvent.id = id;
                    newEvent.url = url;
                    newEvent.start = start.local;
                    newEvent.end = end.local;

                    // save the user
                    newEvent.save(function(err) {
                        if (err) {
                            console.log('Error in Saving user: ' + err);
                            throw err;
                        }
                        console.log('Event Creation succesful');
                        allEvents.push(newEvent);
                        return done(null, newEvent);
                    });
                }
            });
        };
        // Delay the execution of findOrCreateUser and execute the method
        // in the next tick of the event loop
        process.nextTick(findOrCreateEvent);
    }

}