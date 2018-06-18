import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

class Button extends Component {
  renderButton({ link, content, onClick }) {
    return (
      <div className='ButtonContainer' onClick={onClick}>
        <Link to={link}>
          <div className='Button'>
              <span className='ButtonContent'>{content}</span>
          </div>
        </Link>
      </div>
    );
  }

  render() {
    return this.renderButton({...this.props});
  };
}

Button.defaultProps = {
  link: '',
  content: '',
  onClick: () => {
  }
};

Button.PropTypes = {
  link: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.function
};

export default Button;