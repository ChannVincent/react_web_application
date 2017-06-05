import React from 'react';

var WeatherMessage = React.createClass({

  render: function () {
    var { temp, location } = this.props;
    if (temp === undefined || location === undefined) {
      return (
        <h3>temperature or location must be defined.</h3>
      );
    }
    return (
      <h3>It is {temp} in {location}.</h3>
    );
  }

});

module.exports = WeatherMessage;
