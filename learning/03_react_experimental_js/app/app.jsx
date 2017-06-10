var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Andrew',
  location: 'Philadelphia'
}

var objeTwo = {
  age: 25,
  ...objOne
}

console.log(objeTwo);

ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById("app")
);
