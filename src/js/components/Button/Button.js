import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

class Button extends Component {
  renderButton({ link, content, small, onClick }) {
    let className = 'Button ' + (small ? 'Button--Small' : '');

    let rendered = (
      <div className={className}>
        <span className='ButtonContent'>{content}</span>
      </div>
    );

    if (link) {
      rendered = (
        <Link to={link}>
          {rendered}
        </Link>
      );
    };

    return (
      <div className='ButtonContainer' onClick={onClick}>
        {rendered}
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
  small: false,
  onClick: () => {
  }
};

Button.PropTypes = {
  link: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.function
};

export default Button;