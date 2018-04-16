import React, { Component, PropTypes } from 'react';

class OpportunityProgress extends Component {
  render() {
    return (
      <div className='OpportunityProgress'>
        <div className='OpportunityProgress-Content'>
          <div className='OpportunityProgress-Progress'></div>
        </div>
      </div>
    );
  }
}

OpportunityProgress.defaultProps = {

};

OpportunityProgress.PropTypes = {
  progress: PropTypes.number
};

export default OpportunityProgress;