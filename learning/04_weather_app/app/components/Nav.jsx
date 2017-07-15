import React from 'react';
import { Link, IndexLink } from 'react-router';

var Nav = React.createClass({

  onSearch: function (e) {
    e.preventDefault(); // prevent reloading page

    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation; // go to home page with location parameter
    }
  },

  render: function () {
    return (
      <div className="top-bar">

        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Weather App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
            </li>
            <li>
              <Link to="/exemples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Exemples</Link>
            </li>
          </ul>
        </div>

        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>

      </div>
    );
  }
})

module.exports = Nav;
