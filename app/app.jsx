var React = require('react');  // Adding react into this file
var ReactDOM = require('react-dom'); //Adding DOM into the file

//this is structural syntax
//this is es6 de-structuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//this is same as
//var Route = require('react-router').Route;

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
     <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
        <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
