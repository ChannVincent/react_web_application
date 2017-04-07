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

var GreeterForm = React.createClass({
  onFormSubmit: function (event) {
    event.preventDefault();
    var name = this.refs.name.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function () {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <input type="text" ref="name"/>
        <button>Send</button>
      </form>
    )
  }
})

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
      name: name
    })
  },
  render: function () {
    const { name, message } = this.state;
    return (
      <div>
      <GreeterMessage name={ name } message={ message }/>
      <GreeterForm onNewName={ this.handleNewName } />
      </div>
    );
  }
});

var firstName = 'Andrew';
var message = 'Hello you';
ReactDOM.render(
  <Greeter name={ firstName } message={ message } />,
  document.getElementById("app")
);
