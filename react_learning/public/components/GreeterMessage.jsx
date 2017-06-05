var React = require('react');

var GreeterMessage = React.createClass({
  render: function () {
    const { name, message } = this.props;
    return (
      <div>
        <h1>{ name }</h1>
        <p>{ message }</p>
      </div>
    )
  }
});

module.exports = GreeterMessage;
