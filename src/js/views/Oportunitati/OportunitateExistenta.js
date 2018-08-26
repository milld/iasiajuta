import React, { Component } from 'react';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import ProfileImage from '../../components/Image/ProfileImage';
import OpportunityProgress from '../../components/Opportunity/OpportunityProgress';
import './Oportunitati.css';

class OportunitateExistenta extends Component {
  renderOportunitati({ backgroundImage, title, subtitle, profileImage, description, buttonText, progress, date, duration }) {
    return(
      <div className='Oportunitate'>
        <div className='Oportunitate__header'>
          <div className='Oportunitate__header__image'>
            <img src='https://i.imgur.com/BZ4DPfR.jpg' />
          </div>

          <div className='Oportunitate__header__title'>
            <h1>Voluntariat IasiAjuta</h1>
            <h3>Organizat de: Stefan Moraru</h3>

            Fb Google Twitter
          </div>

          <div className='Oportunitate__header__cta'>
            <button className='button button--white'>
              Vreau sa ajut
            </button>
          </div>
        </div>

        <div className='Oportunitate__details'>
          <div className='Oportunitate__details__detail'>
            <div className='Oportunitate__details__detail__circle'>
              V
            </div>

            <div className='Oportunitate__details__detail__content'>
              Inscrierile sunt deschise
            </div>
          </div>
          <div className='Oportunitate__details__detail'>
            <div className='Oportunitate__details__detail__circle'>
              V
            </div>

            <div className='Oportunitate__details__details__content'>
              Inscrierile sunt deschise
            </div>
          </div>
          <div className='Oportunitate__details__detail'>
            <div className='Oportunitate__details__detail__circle'>
              V
            </div>

            <div className='Oportunitate__details__details__content'>
              Inscrierile sunt deschise
            </div>
          </div>
        </div>

        <div className='Oportunitate__description'>
          {description}
        </div>

        <div className='Oportunitate__images'>
          <img src='https://i.imgur.com/BZ4DPfR.jpg' />
        </div>
      </div>
    );

    return (
      <div className='Oportunitati'>
        <BigImage src={backgroundImage} alt={title} small={true}>
          <Title content={title} subtitle={subtitle} />
        </BigImage>

        <div className='Oportunitati-Content-Container'>
          <div className='Oportunitati-Content'>
            <img src={profileImage} alt={subtitle} />

            <p>{description}</p>
            <p><i className="far fa-calendar-alt" /> {date}</p>
            <p><i className="far fa-clock" /> {duration} de minute</p>

            <h1>TODO -- TYPEFORM -- TODO --</h1>

            <OpportunityProgress opportunity={1} progress={progress} />

            <div>
              <Button content={buttonText} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  render() {
    return this.renderOportunitati({...this.props});
  };
}

OportunitateExistenta.defaultProps = {
  backgroundImage: 'https://i.imgur.com/BZ4DPfR.jpg',
  profileImage: 'http://salvaticopiii.ro/en_/templates/gk_elvesocial/images/style1/logo.png',
  title: 'IașiAjută',
  subtitle: 'Voluntariat Auchan',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  buttonText: 'Ajută',
  progress: 70,
  date: 'Sat Mar 31 2018 23:54:45 GMT+0300 (EEST)',
  duration: 120
};

export default OportunitateExistenta;
