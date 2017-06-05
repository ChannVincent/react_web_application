import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

var Weather = React.createClass({

  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 34,
    }
  },

  handleSearch: function(location) {
    this.setState({
      location: location,
      temp: 23,
    });
  },

  render: function() {
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={ this.handleSearch }/>
        <WeatherMessage temp={this.state.temp} location={this.state.location} />
      </div>
    );
  }

});

module.exports = Weather;

/*
weather API : 22be78f3154875a8bcfd2a452c2fea74
call template : http://samples.openweathermap.org/data/2.5/find?q=[Location]&units=imperial&appid=[API key]
call result : http://samples.openweathermap.org/data/2.5/find?q=London&units=imperial&appid=22be78f3154875a8bcfd2a452c2fea74
*/
