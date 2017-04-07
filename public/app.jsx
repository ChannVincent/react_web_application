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

// root
var firstName = 'Andrew';
var message = 'Hello you';
ReactDOM.render(
  <Greeter name={ firstName } message={ message } />,
  document.getElementById("app")
);
