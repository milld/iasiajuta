import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 700;
`;

const ButtonContent = styled.div`
  height: 40px;
  background-color: #2ecc71;
  border-radius: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition-duration: 0.4s;
  margin-bottom: 10px;

  &::after {
    content: '';
    display: block;
    background-color: rgb(23, 214, 103);
    opacity: 1;
    border-radius: 4px;
    width: 0;
    height: 100%;
    transition-duration: 0.4s;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Button = ({ link, content, onClick }) => (
  <ButtonContainer onClick={onClick}>
    <ButtonLink to={link}>
      <ButtonContent>
        {content}
      </ButtonContent>
    </ButtonLink>
  </ButtonContainer>
);

Button.PropTypes = {
  link: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.function
};

Button.defaultProps = {
  link: '',
  content: '',
  onClick: () => {}
};

export {
  Button
}