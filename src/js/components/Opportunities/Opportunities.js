import React, { Component } from 'react';
import Opportunity from '../Opportunity/Opportunity';
import styled from 'styled-components';

const OpportunitiesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Opportunities = () => (
  <OpportunitiesContainer>
    <Opportunity />
    <Opportunity />
    <Opportunity />
    <Opportunity />
  </OpportunitiesContainer>
);

export default Opportunities;