import React, { Component, PropTypes } from 'react';
import { Redirect } from 'react-router-dom';
import UserService from '../../services/UserService';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';
import Opportunities from '../../components/Opportunities/Opportunities';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import './Oportunitati.css';
import { database } from '../../../firebase';

class Oportunitati extends Component {

  componentDidMount() {
    if (!UserService.isUserAuthenticated()) {
      console.log('User is not logged in. Redirecting to home page');
      const { history } = this.props;
      history.push('/');
    }
  }

  renderHomepage({ backgroundImage, title }) {
    return (
      <div className='Oportunitati'>
        <BigImage src={backgroundImage} alt={title} half={true}>
          <Title content={title} subtitle='Ajutăm voluntariatul impreună' />

          <div className='Oportunitati-SearchBar'>
            <Search />
            <Button link="/oportunitati/nou" content="Adaugă" />
          </div>

          <Opportunities />
        </BigImage>
        <Footer />
      </div>
    );
  }

  render() {
    return this.renderHomepage({...this.props});
  };
}

Oportunitati.defaultProps = {
  backgroundImage: 'https://i.imgur.com/BZ4DPfR.jpg',
  title: 'IașiAjută'
};

Oportunitati.PropTypes = {
};

export default Oportunitati;
