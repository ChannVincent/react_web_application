import React from 'react';
import Navigation from 'Navigation';

var Main = (props) => {
  return (
    <div>
      <div>
        <Navigation/>
        <div>
          <p>Main.jsx rendered</p>
          { props.children }
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
