import React, { Component, PropTypes } from 'react';
import './Image.css';

class BigImage extends Component {
  renderImage({ src, alt, link, half, small }) {
    const style = {
      backgroundImage: `url(${src})`
    };

    const className = 'Image-imageContainer'
    + (small ? ' Image-small ' : '')
    + (half ? ' Image-half ' : '');
    const image = !src ? null : <div className={className} style={style}></div>;

    return link ? <a href={link} target='_blank'>{image}</a> : image;
  }

  render() {
    return (
      <div className='BigImage'>
        {this.props.children}
        {this.renderImage({...this.props})}
      </div>
    );
  };
}

BigImage.defaultProps = {
  src: null,
  alt: '',
  link: null,
  half: false,
  small: false
};

BigImage.PropTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string,
  half: PropTypes.bool,
  small: PropTypes.small
};

export default BigImage;