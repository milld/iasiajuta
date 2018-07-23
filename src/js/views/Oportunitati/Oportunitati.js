import React, { Component } from 'react';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';
import Opportunities from '../../components/Opportunities/Opportunities';
import Footer from '../../components/Footer/Footer';
import { Button } from '../../components/Button/Button';
import './Oportunitati.css';

const Oportunitati = ({ backgroundImage, title, subtitle, searchChange, searchOptions, newOpportunity }) => (
  <div className='Oportunitati'>
    <BigImage url={backgroundImage} alt={title} half={true}>
      <Title content={title} subtitle={subtitle} />

      <div className='Oportunitati-SearchBar'>
        <Search options={searchOptions} onChange={searchChange} />
        <Button link={newOpportunity.link} content={newOpportunity.content} />
      </div>

      <Opportunities />
    </BigImage>

    <Footer />
  </div>
);

Oportunitati.defaultProps = {
  backgroundImage: 'https://i.imgur.com/BZ4DPfR.jpg',
  title: 'IașiAjută',
  subtitle: 'Ajutăm voluntariatul impreună',
  searchOptions: [ 'test' ],
  newOpportunity: {
    link: '/oportunitati/nou',
    content: 'Contribuie'
  },
  searchChange: () => {

  }
};


export default Oportunitati;
