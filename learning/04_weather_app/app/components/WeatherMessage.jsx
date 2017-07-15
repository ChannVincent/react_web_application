import React from 'react';

var WeatherMessage = ({ temp, location }) => {

  if (temp === undefined || location === undefined) {
    return (
      <h3 className="text-center">temperature or location must be defined.</h3>
    );
  }
  else {
    return (
      <h3 className="text-center">It is {temp} in {location}.</h3>
    );
  }
}

module.exports = WeatherMessage;
