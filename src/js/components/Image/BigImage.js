import React, { Component, PropTypes } from 'react';
import './Image.css';

class BigImage extends Component {
  renderImage({ src, alt, link, half }) {
    const style = {
      backgroundImage: `url(${src})`
    };

    const className = 'Image-imageContainer' + (half ? ' Image-half ' : '');

    const image = !src ? null : (
      <div className='Image'>
        <div className={className} style={style}></div>
      </div>
    );

    return link ? <a href={link} target='_blank'>{image}</a> : image;
  }

  render() {
    return this.renderImage({...this.props});
  };
}

BigImage.defaultProps = {
  src: null,
  alt: '',
  link: null
};

BigImage.PropTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default BigImage;