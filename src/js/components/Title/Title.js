import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainTitle = styled.h2`
  color: white;
  font-weight: 700;
  display: block;
  font-size: 2.4em;
  margin-bottom: 0;
`;

const Subtitle = styled.h3`
  color: white;
  font-weight: 700;
  display: block;
  font-size: 1.2em;
  margin-top: 0;
`;

const Title = ({ content, subtitle }) => (
  <div>
    <MainTitle>{content}</MainTitle>
    <Subtitle>{subtitle}</Subtitle>
  </div>
);

Title.defaultProps = {
  content: null,
  subtitle: null
};

Title.PropTypes = {
  content: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Title;