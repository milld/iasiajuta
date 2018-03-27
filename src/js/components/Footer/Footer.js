import React, { Component, PropTypes } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
      //<h3>Vrei să donezi? Dăm un suc. Contactează-ne la <a href="tel:+40740270895">0740270895</a>.</h3>

    return (
      <div className='Footer'>
        <h3>Atât?</h3>
        <h3>Simplă și ușor de folosit, platforma IasiAjuta oferă oportunități de implicare la un click distanță.</h3>
        <h3>În plus, IașiAjută este deschisă din toate punctele de vedere. Ia și ajută-ne cu <a href='https://github.com/milld/iasiajuta/' target='_blank'>îmbunătățirea platformei</a>, în timp ce noi suportăm <a href='https://docs.google.com/spreadsheets/d/1FK-hN8_foDm0tToiuTyelfBD8AdOlDJZUchyyqOCspg/edit?usp=sharing' target='_blank'>cheltuielile</a>.</h3>
        <img src="/logo_milld.png" />
        <h4>Ștefan Moraru, Emilian Damian</h4>
        <h4>Mulțumim Ioanei Mardari pentru ajutor!</h4>
      </div>
    );
  };
}

Footer.defaultProps = {
};

Footer.PropTypes = {
};

export default Footer;