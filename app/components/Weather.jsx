import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

var Weather = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  handleSearch: function(location) {
    var that = this;
    this.setState({
      isLoading: true
    })

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp,
      });
    },
    function (errorMessage) {
      alert(errorMessage);
      that.setState({
        isLoading: false,
        location: undefined,
        temp: undefined,
      });
    });
  },

  render: function() {
    const {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather ...</h3>
      }
      else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
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
