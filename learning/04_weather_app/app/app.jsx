var React = require('react');
var ReactDOM = require('react-dom');
var {
  Route,
  Router,
  IndexRoute,
  hashHistory
} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Exemples = require('Exemples');


ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }>
      <Route path="exemples" component={ Exemples }/>
      <Route path="about" component={ About }/>
      <IndexRoute component={ Weather }/>
    </Route>
  </Router>,
  document.getElementById("app")
);