import React from 'react';

var WeatherMessage = ({ temp, location }) => {

  if (temp === undefined || location === undefined) {
    return (
      <h3>temperature or location must be defined.</h3>
    );
  }
  else {
    return (
      <h3>It is {temp} in {location}.</h3>
    );
  }
}

module.exports = WeatherMessage;
