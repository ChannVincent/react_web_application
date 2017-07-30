import React from 'react';
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired,
  },

  getDefaultProps: function () {
    return {
      title: 'Error'
    }
  },

  componentDidMount: function () {
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>
          {title}
        </h4>
        <p>
          {message}
        </p>
        <p>
          <button className="button hollow" data-close="">
            Ok
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToStroing(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render: function () {
    var {title, message} = this.props;
    return (
      <div>
      </div>
    );
  }

});

module.exports = ErrorModal;