var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//^^used ES6 destructuring syntax to pull off four variables from react router

// Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate3 Project</p>,
  document.getElementById('app')
);
