// result component
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
})

// form component
var GreeterForm = React.createClass({
  onFormSubmit: function (event) {
    event.preventDefault();
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
    if (message.length > 0) {
      this.refs.message.value = '';
      this.props.onNewMessage(message);
    }
  },
  render: function () {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <input type="text" ref="name"/>
        <input type="text" ref="message"/>
        <button>Send</button>
      </form>
    )
  }
})

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
  handleNewName: function (name) {
    this.setState({
      name
    })
  },
  handleNewMessage: function (message) {
    this.setState({
      message
    })
  },
  render: function () {
    const { name, message } = this.state;
    return (
      <div>
        <GreeterMessage name={ name } message={ message }/>
        <GreeterForm onNewName={ this.handleNewName } onNewMessage={ this.handleNewMessage } />
      </div>
    );
  }
});

// root
var firstName = 'Andrew';
var message = 'Hello you';
ReactDOM.render(
  <Greeter name={ firstName } message={ message } />,
  document.getElementById("app")
);
