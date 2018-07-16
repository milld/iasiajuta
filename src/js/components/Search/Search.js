import React, { Component } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
`;

const SearchIcon = styled.i`
  font-size: 10px;
  margin-top: -5px;
  margin-left: 12px;
  position: absolute;
  top: 50%;
`;

const SearchInput = styled.input`
  width: 500px;
  height: 40px;
  padding: 8px;
  padding-left: 30px;
  box-sizing: border-box;
  border: 0;
  border-radius: 4px;
  font-size: 12px;
`;

const Search = ({ icon, placeholder, searchChange }) => (
  <SearchContainer>
    <SearchIcon className={icon} />
    <SearchInput type='text' placeholder={placeholder} onChange={searchChange} />
  </SearchContainer>
);

Search.defaultProps = {
  icon: 'fas fa-search',
  placeholder: 'Organizatie, Nume, Eveniment, Locatie, Data',
  searchChange: (event) => {
    const value = event.target.value;

    return [
      'IMPLEMENT THIS IN PARENT AND PASS OPTIONS AS PROPS',
      'MATCH %VALUE%'
    ];
  }
};

export default Search;