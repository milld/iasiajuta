import React, { Component, PropTypes } from 'react';
import './ProfileImage.css';

class ProfileImage extends Component {
  renderImage({ src, alt, link, half }) {
    const style = {
      backgroundImage: `url(${src})`
    };

    const className = 'BigImage-imageContainer' + (half ? ' BigImage-half ' : '');

    const image = !src ? null : (
      <div className="BigImage">
        <div className={className} style={style}></div>
      </div>
    );

    return link ? <a href={link} target='_blank'>{image}</a> : image;
  }

  render() {
    return this.renderImage({...this.props});
  };
}

ProfileImage.defaultProps = {
  src: null,
  alt: '',
  link: null
};

ProfileImage.PropTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default ProfileImage;