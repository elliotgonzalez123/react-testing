import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SharedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = () => {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  };

  render() {
    const { buttonText } = this.props;
    return (
      <button data-test="button-component" onClick={this.onSubmit}>
        {buttonText}
      </button>
    );
  }
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default SharedButton;
