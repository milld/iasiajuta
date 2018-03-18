import React, { Component, PropTypes } from 'react';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';
import Opportunities from '../../components/Opportunities/Opportunities';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import './Oportunitati.css';

class Oportunitati extends Component {
  renderHomepage({ backgroundImage, title }) {
    return (
      <div className='Oportunitati'>
        <BigImage src={backgroundImage} alt={title} half={true} />
        <Title content={title} />
        <Search />
        <Button link="/oportunitati/nou" content="Adauga" />
        <Opportunities />
        <Footer />
      </div>
    );
  }

  render() {
    return this.renderHomepage({...this.props});
  };
}

Oportunitati.defaultProps = {
  backgroundImage: 'https://cvhf.org.uk/wp-content/uploads/2015/11/volunteering-1400x630.jpg?x35849',
  title: 'IașiAjută'
};

Oportunitati.PropTypes = {
};

export default Oportunitati;
