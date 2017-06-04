var React = require('react');
var ReactDOM = require('react-dom');

// form component
var GreeterForm = React.createClass({
  onFormSubmit: function (event) {
    event.preventDefault();
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var data = {};
    if (name.length > 0) {
      this.refs.name.value = '';
      data.name = name;
    }
    if (message.length > 0) {
      this.refs.message.value = '';
      data.message = message;
    }
    this.props.onNewData(data);
  },
  render: function () {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        <div>
          <textarea type="text" ref="message" placeholder="Enter message"/>
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    )
  }
})

module.exports = GreeterForm;
