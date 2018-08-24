import React from 'react';
import FormBuilder from 'react-form-creator';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import { Button } from '../../components/Button/Button';
import ProfileImage from '../../components/Image/ProfileImage';
import OpportunityProgress from '../../components/Opportunity/OpportunityProgress';
import './Oportunitati.css';

const OportunitateNoua = ({ content, subtitle, profileImage, backgroundImage, description, button }) => (
  <div>
    <Title content={content} subtitle={subtitle} />
    <ProfileImage src={profileImage} alt='Volunteering' />
    <BigImage url={backgroundImage} alt='Volunteering' half={true} />
    <span>{description}</span>
    <OpportunityProgress opportunity={1} />
    <FormBuilder />
    <Button content={button.content} onClick={button.onClick} />
    <Footer />
  </div>
);

OportunitateNoua.defaultProps = {
  title: 'IasiAjuta',
  subtitle: 'Salvati Copiii',
  profileImage: 'http://www.protectiacopilului6.ro/thumb_500x500_1838-salvatii-copii.jpg',
  backgroundImage: 'http://wondrlust.com/wp-content/uploads/2017/11/o-STUDENTS-VOLUNTEERING-facebook.jpg',
  description: 'Descriere',
  button: {
    content: 'Ajuta',
    onClick: () => {
    }
  }
};

OportunitateNoua.PropTypes = {
};

export default OportunitateNoua;