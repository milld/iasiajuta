import React, { Component } from 'react';
import Opportunity from '../Opportunity/Opportunity';
import './Opportunities.css';

class Opportunities extends Component {
  render() {
    return (
      <div className='Opportunities'>
        <Opportunity />
        <Opportunity />
        <Opportunity />
        <Opportunity />
      </div>
    )
  };
}

Opportunities.defaultProps = {
};

export default Opportunities;