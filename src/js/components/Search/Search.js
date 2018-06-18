import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  renderIcon({ icon }) {
    return <i className={icon} />;
  }

  renderInput({ placeholder }) {
    return <input type='text' placeholder={placeholder} onChange={this.props.searchChange} />;
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
  placeholder: 'Organizatie, Nume, Eveniment, Locatie, Data',
  searchChange: (event) => {
    const value = event.target.value;

    return [
      'IMPLEMENT THIS IN PARENT AND PASS OPTIONS AS PROPS',
      'MATCH %VALUE%'
    ];
  }
};

export default Search;