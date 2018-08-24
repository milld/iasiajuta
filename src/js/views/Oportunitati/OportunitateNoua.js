import React, { Component, PropTypes } from 'react';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import ProfileImage from '../../components/Image/ProfileImage';
import OpportunityProgress from '../../components/Opportunity/OpportunityProgress';
import './Oportunitati.css';

class OportunitateNoua extends Component {
  render() {
    return (
      <div className='Oportunitati'>
        <BigImage src={'https://i.imgur.com/BZ4DPfR.jpg'} small={true}>
          <Title content={'Oportunitate noua'} />
        </BigImage>

        <div className='Oportunitati-Content-Container'>
          <div className='Oportunitati-Content'>
            Titlu oportunitate
            <input type='text' />
            Descriere
            <input type='text' />
            Adauga imagine
            <input type='file' />

            Data de inceput
            <input type='datetime' />

            Calendar

            <div>
              <Button content={'Noua'} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

OportunitateNoua.defaultProps = {
  description: null
};

OportunitateNoua.PropTypes = {
  description: PropTypes.string
};

export default OportunitateNoua;