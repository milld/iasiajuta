import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
.Image-big {
  width: 180px;
  height: 180px;
}

.Image {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 2;
}

.ProfileImage {
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 2;
}

.Profile-imageContainer {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: 100%;
  background-color: #2ecc71;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: -1;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.4);
  background-attachment: initial;
  border-radius: 100%;
  border: 1px solid #2ecc71;
  margin-top: -2px;
}

.Profile-imageContainer:before {
  display: none;
}

.ProfileImage {
  width: 40px;
  height: 40px;
}
*/

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