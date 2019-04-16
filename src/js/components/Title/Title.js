import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
// import './Title.css';

const TitleContainer = styled.div`
  color: white;
  font-weight: 700;
  display: block;
`;

const TitleH1 = styled.h1`
  font-size: 2.4em;
  margin-bottom: 0;
`;

const TitleH2 = styled.h2`
  font-size: 1.2em;
  margin-top: 0;
`;

class Title extends Component {
  render() {
    return (
      <TitleContainer>
        <TitleH1>{this.props.content}</TitleH1>
        <TitleH2>{this.props.subtitle}</TitleH2>
      </TitleContainer>
    );
  };
}

Title.defaultProps = {
  content: null,
  subtitle: null
};

Title.PropTypes = {
  content: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Title;