import React from 'react';
import Nav from 'Nav';

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav />
        <h2>Main Component</h2>
      </div>
    );
  }
});

module.exports = Main;
