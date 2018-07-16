import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Title.css';

class Title extends Component {
  render() {
    return (
      <div>
        <h1 className='Title'>{this.props.content}</h1>
        <h2 className='Title'>{this.props.subtitle}</h2>
      </div>
    );
  };
}

Title.defaultProps = {
  content: null,
  subtitle: null
};

Title.PropTypes = {
  content: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Title;