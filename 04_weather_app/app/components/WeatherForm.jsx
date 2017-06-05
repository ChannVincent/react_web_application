import React from 'react';

var GreeterForm = React.createClass({

  render: function () {
    return (
      <form>
        <div>
          <input type="text"/>
          <button>Get Weather</button>
        </div>
      </form>
    )
  }

})

module.exports = GreeterForm;
