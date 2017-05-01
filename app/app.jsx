// require dependencies that our file needs
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="about" component={About}/> // This is another Route
        <Route path="examples" component={Examples}/> // This is another Route
        <IndexRoute component={Weather}/> // The Index Route is the homepage
      </Route>
  </Router>,
  document.getElementById('app')
);
