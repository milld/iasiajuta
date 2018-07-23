import React, { Component, PropTypes } from 'react';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';
import Opportunities from '../../components/Opportunities/Opportunities';
import Footer from '../../components/Footer/Footer';
import { Button } from '../../components/Button/Button';
import ProfileImage from '../../components/Image/ProfileImage';
import ProfileProgress from './ProfileProgress';
import styled from 'styled-components';

const Profil = ({ backgroundImage, title, subtitle }) => (
  <div className='Oportunitati'>
    <Title content={title} subtitle={subtitle} />
    <ProfileImage src='http://via.placeholder.com/350x150' alt='Placeholder' big={true} />
    <ProfileProgress />
    <Opportunities />
    <Footer />
  </div>
);

Profil.defaultProps = {
  backgroundImage: 'https://cvhf.org.uk/wp-content/uploads/2015/11/volunteering-1400x630.jpg?x35849',
  title: 'IașiAjută',
  subtitle: 'Emilian Damian'
};

Profil.PropTypes = {
};

export default Profil;