import React from 'react';

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Thi is a weather application built on React.</p>
      <p>
        Here are some of the tool I use :
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.ios/react">React </a>
             - This was the javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map </a>
             - I used Open Weather map to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
