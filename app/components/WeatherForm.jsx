import React from 'react';

/*
event.preventDefault : prevent from reloading the whole page after submitting
*/
var GreeterForm = React.createClass({

  onFormSubmit: function (event) {
    event.preventDefault();
    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render: function () {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <div>
          <input type="text" ref="location"/>
          <button className="button expanded hollow">Get Weather</button>
        </div>
      </form>
    )
  }

})

module.exports = GreeterForm;
