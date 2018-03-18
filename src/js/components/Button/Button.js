import React, { Component, PropTypes } from 'react';
import './Button.css';

class Button extends Component {
  renderButton({ link, content }) {
    return (
      <div className='Button'>
        <a href={link}>
          <span>{content}</span>
        </a>
      </div>
    );
  }

  render() {
    return this.renderButton({...this.props});
  };
}

Button.defaultProps = {
  link: '',
  content: ''
};

Button.PropTypes = {
  link: PropTypes.string,
  content: PropTypes.string
};

export default Button;