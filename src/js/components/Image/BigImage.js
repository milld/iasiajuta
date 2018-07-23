import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageContainer = styled.img`
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  z-index: -1;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.4);

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
  }
`;

const SmallImageContainer = ImageContainer.extend`
  max-height: 40vh;
  padding-top: 10vh;
  padding-bottom: 10vh;
  box-sizing: content-box;
  background-image: url(${props => props.url});
`;

const HalfImageContainer = ImageContainer.extend`
  max-height: 60vh;
  min-height: 400px;
  background-image: url(${props => props.url});
`;

const BigImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = ({ url, half, small }) => {
  let _image;

  if (small) {
    _image = SmallImageContainer;
  } else if (half) {
    _image = HalfImageContainer;
  } else {
    _image = BigImageContainer;
  }

  return url ? <_image url={url} /> : null;
};

const ImageWithLink = ({ url, half, small, link }) => {
  const image = <Image url={url} half={half} small={small} />;

  return link ? <a href={link} target='_blank'>{image}</a> : image;
};

const BigImage = ({ url, alt, link, half, small, children }) => (
  <BigImageContainer>
    {children}

    <ImageWithLink url={url} half={half} small={small} link={link} />
  </BigImageContainer>
);

BigImage.defaultProps = {
  url: null,
  alt: '',
  link: null,
  half: false,
  small: false
};

BigImage.PropTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string,
  half: PropTypes.bool,
  small: PropTypes.small
};

export default BigImage;