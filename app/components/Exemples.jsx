import React from 'react';
var {
  Link
} = require('react-router');

var Exemples = (props) => {
  return (
    <div>

      <h1 className="text-center page-title">Exemples</h1>
      <p>Here are a few example locations to try out:</p>

      <ul>
        <li>
          <Link to="/?location=Philadelphia">Philadelphia, PA</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brazil</Link>
        </li>
      </ul>

    </div>
  );
}

module.exports = Exemples;
