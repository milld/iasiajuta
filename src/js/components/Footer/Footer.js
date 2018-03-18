import React, { Component, PropTypes } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <span>Atât?</span>
        <span>Simplă și ușor de folosit, platforma IasiAjuta oferă oportunități de implicare la un click distanță.</span>
        <span>În plus, IașiAjută este deschisă din toate punctele de vedere. Ia și ajută-ne cu <a href='https://github.com/milld/iasiajuta/' target='_blank'>îmbunătățirea platformei</a>, în timp ce noi suportăm <a href='https://docs.google.com/spreadsheets/d/1FK-hN8_foDm0tToiuTyelfBD8AdOlDJZUchyyqOCspg/edit?usp=sharing' target='_blank'>cheltuielile</a></span>
        <span>Vrei să donezi? Dăm un suc PayPal</span>
        <span>Milld</span>
        <span>Ștefan Moraru, Emilian Damian</span>
        <span>Mulțumim Ioanei Mardari pentru ajutor</span>
      </div>
    );
  };
}

Footer.defaultProps = {
};

Footer.PropTypes = {
};

export default Footer;