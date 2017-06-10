import axios from 'axios';

// const : variable that can't be altered
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=22be78f3154875a8bcfd2a452c2fea74&units=imperial';

//es6 template string with ${}
module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(
      function (res) {
        const { cod, message, main } = res.data;
        if (cod && message) {
          throw new Error(message);
        }
        else {
          return main.temp;
        }
      },
      function (res) {
        throw new Error(res.data.message);
      }
    );

  }
}
