import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import styled from 'styled-components';

const OpportunityImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  position: relative;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-image: url(${props => props.image});
`;

const OpportunityTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 4px;
`;

const OpportunityDescription = styled.span`
  font-size: 12px;
`;

const OpportunityLogo = styled.img`
  width: 32px;
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 100%;
  opacity: 0.8;
`;

const OpportunityButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
`;

const OpportunityDetails = styled.div`
  width: 240px;
  padding: 12px;
`;

const OpportunityImageContainer = styled.div`
  width: 240px;
  height: 180px;
`;

const OpportunityContainer = styled.div`
  width: 500px;
  height: 180px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-top: 12px;
  display: flex;
`;

const Opportunity = ({ image, title, description, logo, button }) => (
  <OpportunityContainer>
    <OpportunityImageContainer>
      <OpportunityImage image={image} />
    </OpportunityImageContainer>

    <OpportunityDetails>
      <OpportunityTitle>{title}</OpportunityTitle>
      <OpportunityDescription>{description}</OpportunityDescription>
      <OpportunityLogo src={logo} alt={title} />
      <OpportunityButton content={button.content} link={button.link} />
    </OpportunityDetails>
  </OpportunityContainer>
);

Opportunity.defaultProps = {
  title: 'Heading',
  image: 'https://bucharest-marathon.com/wp-content/uploads/2016/09/Echipa-Salvati-Copiii-la-maraton-9-octombrie.jpg',
  button: {
    content: 'Ajută',
    link: '/oportunitati/123'
  },
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
  logo: 'http://www.protectiacopilului6.ro/thumb_500x500_1838-salvatii-copii.jpg'
};

Opportunity.PropTypes = {
  title: PropTypes.string
};

export default Opportunity;