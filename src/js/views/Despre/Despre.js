import React, { Component, PropTypes } from 'react';
import './Despre.css';

class Despre extends Component {
  renderContent({content}) {
    return (
      <span>{content}</span>
    );
  }

  render() {
    return (
      <div>
        <span>IasiAjuta</span>
        <span>Pagina in constructie</span>
        <span>{this.renderContent({...this.props})}</span>
      </div>
    );
  }
}

Despre.defaultProps = {
  content: 'ce inseamna de fapt voluntariatul? de ce sa faci voluntariat? voluntariatul in alte tari -  cum are loc, cat de des de ce as investi timp fara sa fiu platit? exemple de initiative de voluntariat/cum s-ar putea face voluntariat testimoniale '
};

Despre.PropTypes = {
  content: PropTypes.string.isRequired
};

export default Despre;