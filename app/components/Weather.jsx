import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

var Weather = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false,
      errorMessage: undefined,
    }
  },

  handleSearch: function(location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
    })

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp,
        errorMessage: undefined,
      });
    },
    function (e) {
      that.setState({
        isLoading: false,
        location: undefined,
        temp: undefined,
        errorMessage: e.message,
      });
    });
  },

  render: function() {
    const {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather ...</h3>
      }
      else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
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
