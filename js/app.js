import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login.js';
import EventsHandler from './components/AllEvents.js';

let App = React.createClass({  
  render() {
    return (
      <div className="nav">
        <Link to="app">LETS GO HOME</Link>

        <Link to="login">Login</Link>

        <Link to="events">All Events</Link>


        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
    <Route name="events" path="/events" handler={EventsHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});