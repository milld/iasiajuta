import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const TypeFormContainer = styled.div`
  width: 500px;
  height: 180px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-top: 12px;
  display: flex;
`;

const TypeForm = ({ url }) => (
    <TypeFormContainer>
        <ReactTypeformEmbed url={url} />
    </TypeFormContainer>
);

TypeForm.defaultProps = {
    url: 'https://emilian2.typeform.com/to/m8U3tC'
};

TypeForm.PropTypes = {
    url: PropTypes.string
};

export default TypeForm;