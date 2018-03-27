import React, { Component, PropTypes } from 'react';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';
import Opportunities from '../../components/Opportunities/Opportunities';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import ProfileImage from '../../components/Image/ProfileImage';
import OpportunityProgress from '../../components/Opportunity/OpportunityProgress';
import './Oportunitati.css';

class OportunitateExistenta extends Component {
  renderOportunitati({ backgroundImage, title, subtitle, profileImage, description, buttonText }) {
    return (
      <div className='Oportunitati'>
        <BigImage src={backgroundImage} alt={title} half={true}>
          <Title content={title} subtitle={subtitle} />

          <ProfileImage big={true} src={profileImage} alt={subtitle} />

          <span>{description}</span>

          <OpportunityProgress opportunity={1} />

          <Button link="/oportunitati/123/aplica" content={buttonText} />
        </BigImage>
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
  profileImage: 'https://www.paginademedia.ro/wp-content/uploads/2016/02/sigla_salvati_copiii_tb730.jpg',
  title: 'IașiAjută',
  subtitle: 'Salvati Copiii',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  buttonText: 'Inscrie-te'
};

OportunitateExistenta.PropTypes = {
};

export default OportunitateExistenta;
