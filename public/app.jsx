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
  onButtonClick: function (event) {
    event.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';
    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      })
    }
  },
  render: function () {
    const { name, message } = this.state;
    return (
      <div>
        <h1>Hello { name }!</h1>
        <p>{ message }</p>

      <form onSubmit={ this.onButtonClick }>
        <input type="text" ref="name"/>
        <button>Send</button>
      </form>
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
