import React, { Component } from 'react';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';
import Opportunities from '../../components/Opportunities/Opportunities';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import './Oportunitati.css';

class Oportunitati extends Component {
  renderOportunitati({ backgroundImage, title }) {
    return (
      <div className='Oportunitati'>
        <div className='Homepage__opportunitiesfilter'>
          <div>
            <h3>Oportunitati de voluntariat</h3>
          </div>
        </div>

        <div className='Oportunitati-SearchBar'>
          <Search options={this.props.searchOptions} onChange={this.props.searchChange} />
          <Button link="/oportunitate-noua" content="Adauga oportunitate noua" />
        </div>

        <Opportunities />
        <Footer />
      </div>
    );
  }

  render() {
    return this.renderOportunitati({...this.props});
  };
}

Oportunitati.defaultProps = {
  backgroundImage: 'https://i.imgur.com/BZ4DPfR.jpg',
  title: 'IașiAjută',
  searchOptions: [ 'test' ],
  searchChange: () => {

  }
};


export default Oportunitati;
