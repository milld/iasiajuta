import React, {Component} from 'react';
import styled from 'styled-components';

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Center = () => (
  <Centered>
    {this.props.children}
  </Centered>
);

export default Center;