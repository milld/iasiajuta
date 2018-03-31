import React, { Component, PropTypes } from 'react';
import './Image.css';

class ProfileImage extends Component {
  renderImage({ src, alt, link, half, big }) {
    const style = {
      backgroundImage: `url(${src})`
    };

    const className = 'Profile-imageContainer'
    + (half ? ' Image-half ' : '')
    + (big ? ' Image-big ' : '');

    const classNameImage = 'ProfileImage'
    + (big ? ' Image-big ' : '');

    const image = !src ? null : (
      <div className={classNameImage}>
        <div className={className} style={style}></div>
      </div>
    );

    return link ? <a href={link}>{image}</a> : image;
  }

  render() {
    return this.renderImage({...this.props});
  };
}

ProfileImage.defaultProps = {
  src: null,
  alt: '',
  link: null,
  big: false
};

ProfileImage.PropTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string,
  big: PropTypes.bool
};

export default ProfileImage;