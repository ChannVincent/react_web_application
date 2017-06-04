var React = require('react');
var GreeterForm = require('GreeterForm');
var GreeterMessage = require('GreeterMessage');

// container component
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is from the component'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewData: function (data) {
    this.setState(data)
  },
  render: function () {
    const { name, message } = this.state;
    return (
      <div>
        <GreeterMessage name={ name } message={ message }/>
        <GreeterForm onNewData={ this.handleNewData } />
      </div>
    );
  }
});

module.exports = Greeter;
