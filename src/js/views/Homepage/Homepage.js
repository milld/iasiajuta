import React, { Component, PropTypes } from 'react';
import Footer from '../../components/Footer/Footer';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='Homepage'>

        <div className='Homepage__top'>
          <div className='Homepage__top__content'>
            <h1>Acum poti si tu</h1>
            <h1>sa <span>AJUTI</span>.</h1>
            <h3>Tu alegi cum, cat, unde</h3>

            <button className='button button--green'>
              Vreau sa ajut
            </button>
          </div>

          <div className='Homepage__top__image'>
          </div>

          <div className='Homepage__top__palace'>
            <img src='/palatulculturii.png' />
          </div>
        </div>

        <div className='Homepage__opportunitiesfilter'>
          <div>
            <h3>Oportunitati de voluntariat</h3>
          </div>
        </div>

        <div className='Homepage__opportunities'>
          <div className='Homepage__opportunities__opportunitycontainer'>
            <div className='Homepage__opportunities__opportunity' style={{ backgroundImage: 'url(https://i.imgur.com/YfO2A3o.jpg' }}>
              <div className='Homepage__opportunities__opportunity__content'>
                <h2 className='Homepage__opportunities__opportunity__title'>Voluntariat IasiAjuta</h2>
                <button className='button button--white'>Vezi detalii</button>
              </div>
            </div>
          </div>
          <div className='Homepage__opportunities__opportunitycontainer'>
            <div className='Homepage__opportunities__opportunity' style={{ backgroundImage: 'url(https://i.imgur.com/YfO2A3o.jpg' }}>
              <div className='Homepage__opportunities__opportunity__content'>
                <h2 className='Homepage__opportunities__opportunity__title'>Voluntariat IasiAjuta</h2>
                <button className='button button--white'>Vezi detalii</button>
              </div>
            </div>
          </div>
          <div className='Homepage__opportunities__opportunitycontainer'>
            <div className='Homepage__opportunities__opportunity' style={{ backgroundImage: 'url(https://i.imgur.com/YfO2A3o.jpg' }}>
              <div className='Homepage__opportunities__opportunity__content'>
                <h2 className='Homepage__opportunities__opportunity__title'>Voluntariat IasiAjuta</h2>
                <button className='button button--white'>Vezi detalii</button>
              </div>
            </div>
          </div>
          <div className='Homepage__opportunities__opportunitycontainer'>
            <div className='Homepage__opportunities__opportunity' style={{ backgroundImage: 'url(https://i.imgur.com/YfO2A3o.jpg' }}>
              <div className='Homepage__opportunities__opportunity__content'>
                <h2 className='Homepage__opportunities__opportunity__title'>Voluntariat IasiAjuta</h2>
                <button>Vezi detalii</button>
              </div>
            </div>
          </div>
        </div>

        <div className='Homepage__cta'>
          <button className='button button--green'>Vezi toate oportunitatile</button>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Homepage;