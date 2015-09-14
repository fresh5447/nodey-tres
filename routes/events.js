var request = require('request');
var express = require('express');
var Event = require('../models/event');
var config = require('../config');
var axios = require('axios');
var _ = require('lodash');


var error = function(res, response){
  res.status(400).send({
    error: true,
    message: response
  })
};


var getEventsForUser = function(req, res){

    axios.get(config.allEventsurl).then( function(response){
          
      var events = response.data.events;
      _.each(events, Event.findOrCreateEvent);
      res.status(200).send({
        message: 'it worked!'
      })
      
    }).catch( function(response){
      error(res, response);
    })
};

// eventId = "17298246521"
// var newurl = "https://www.eventbriteapi.com/v3/events/:eventId/attendees/?token=MGFZ4C7MMBDVQURVPW6X"

var getAllEventAttendees = function(req, res){
  axios.get(newurl).then(function(response){
    console.log(response.data.attendees);
    var attendees = response.data.attendees;
    res.status(200).send({
      message: 'it worked!'
    })
  }).catch( function(response){
    error(res, response);
  })

};

var createEvent = function(req, res){

}

var deleteEvent = function(req, res){

}

var updateEvent = function(req, res){

}

var routes = function(){
    var router = express();
    router.get('/', getEventsForUser);
    router.get('/eventId/attendees', getAllEventAttendees);
    router.post('/', createEvent);
    router.put('/:eventId', updateEvent);
    router.delete('/:eventId', deleteEvent);
    return router;
};

module.exports = routes;