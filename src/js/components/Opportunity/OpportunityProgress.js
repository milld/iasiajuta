import React, { Component } from 'react';
import PropTypes from 'prop-types';

const OpportunityProgress = () => (
  <div className='OpportunityProgress'>
    <div className='OpportunityProgress-Content'>
      <div className='OpportunityProgress-Progress'></div>
    </div>
  </div>
);

OpportunityProgress.defaultProps = {
};

OpportunityProgress.PropTypes = {
  progress: PropTypes.number
};

export default OpportunityProgress;