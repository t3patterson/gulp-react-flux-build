"use strict"
var React = require('react');
//React-Router
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var Redirect = Router.Redirect;


//Components
var App = require('./components/app.js');
var NotFoundPage = require('./components/not_found_page.js');

var HomeView         = require('./components/home_page.js');
var AboutView        = require('./components/about/about_page.js');


console.log('say hi');

var routes = (
  <Route name="app" path="/"  handler={App} >
    <DefaultRoute handler={HomeView}/>
    
    <Route name="about" handler={AboutView}/>
    //<Route name="authors" path="/authors" handler={AuthorsView}/>
    // <Route name="authors-new" path="/authors/new" handler={NewAuthorView}/>
    // <Route name="show-single-author" path="/authors/:autId" handler={SingleAuthorView}/>
    // <Route name="edit-single-author" path="/authors/:autId/edit" handler={EditAuthorView}/>

    <NotFoundRoute handler={NotFoundPage}/>
    <Redirect from="about-us" to="about"/>
    <Redirect from="about/*" to="about"/>
    <Redirect from="awthurs" to="authors"/>
  </Route>
);

module.exports = routes;