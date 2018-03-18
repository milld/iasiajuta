import React, { Component, PropTypes } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return <span className='Title'>{ this.props.content }</span>
  };
}

Title.defaultProps = {
  content: null
};

Title.PropTypes = {
  content: PropTypes.string.isRequired
};

export default Title;