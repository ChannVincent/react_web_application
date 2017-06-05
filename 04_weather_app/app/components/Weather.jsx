import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

var Weather = React.createClass({

  render: function() {
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }

});

module.exports = Weather;

/*
<GreeterForm onNewData={ this.handleNewData } />
<GreeterMessage message={ message }/>

*/
