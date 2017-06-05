import React from 'react';
import { Link, IndexLink } from 'react-router';

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Navigation Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
        <Link to="/exemples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Exemples</Link>
      </div>
    );
  }
});

module.exports = Nav;
