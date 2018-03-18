import React, { Component, PropTypes } from 'react';
import Opportunity from '../Opportunity/Opportunity';

class Opportunities extends Component {
  render() {
    return (
      <div>
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

Opportunities.PropTypes = {
};

export default Opportunities;