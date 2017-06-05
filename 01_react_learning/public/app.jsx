var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

// root
var firstName = 'Jen';
var message = 'Hello you';
ReactDOM.render(
  <Greeter name={ firstName } message={ message } />,
  document.getElementById("app")
);
