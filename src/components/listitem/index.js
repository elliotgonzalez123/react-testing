import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, desc } = this.props;

    if (!title) {
      return null;
    }

    return (
      <div data-test="list-item-component">
        <h2 data-test="component-title">{title}</h2>
        <p data-test="component-desc">{desc}</p>
      </div>
    );
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};

export default ListItem;
