var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

// root
var firstName = 'Andrew';
var message = 'Hello you';
ReactDOM.render(
  <Greeter name={ firstName } message={ message } />,
  document.getElementById("app")
);
