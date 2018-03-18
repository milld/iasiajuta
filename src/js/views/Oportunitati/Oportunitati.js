import React, { Component, PropTypes } from 'react';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';
import Opportunities from '../../components/Opportunities/Opportunities';
import Footer from '../../components/Footer/Footer';
import './Oportunitati.css';

class Homepage extends Component {
  renderHomepage({ backgroundImage, title }) {
    return (
      <div className='Oportunitati'>
        <BigImage src={backgroundImage} alt={title} half={true} />
        <Title content={title} />
        <Search />
        <Opportunities />
        <Footer />
      </div>
    );
  }

  render() {
    return this.renderHomepage({...this.props});
  };
}

Homepage.defaultProps = {
  backgroundImage: 'https://cvhf.org.uk/wp-content/uploads/2015/11/volunteering-1400x630.jpg?x35849',
  title: 'IașiAjută'
};

Homepage.PropTypes = {
};

export default Homepage;