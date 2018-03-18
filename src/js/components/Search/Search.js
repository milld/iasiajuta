import React, { Component, PropTypes } from 'react';
import './Search.css';

class Search extends Component {
  renderIcon({ icon }) {
    return <i className={icon} />;
  }

  renderInput({ placeholder }) {
    return <input type='text' placeholder={placeholder} />;
  }

  render() {
    return (
      <div className='Search'>
        {this.renderIcon({...this.props})}
        {this.renderInput({...this.props})}
      </div>
    );
  };
}

Search.defaultProps = {
  icon: 'fas fa-search',
  placeholder: 'Organizatie, Nume, Eveniment, Locatie, Data'
};

Search.PropTypes = {
};

export default Search;