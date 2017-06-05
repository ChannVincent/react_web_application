import React from 'react';
import { Link } from 'react-router';

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Navigation Component</h2>
        <Link to="/">Get Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/exemples">Exemples</Link>
      </div>
    );
  }
});

module.exports = Nav;
