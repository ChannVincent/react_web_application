var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is from the component'
    }
  },
  onButtonClick: function (event) {
    event.preventDefault();
    var name = this.refs.name.value;
    alert(name);
  },
  render: function () {
    const { name, message } = this.props;
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
