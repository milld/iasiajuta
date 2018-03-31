import React, { Component, PropTypes } from 'react';

class OpportunityProgress extends Component {
  render() {
    return (
      <h1>Progress</h1>
    );
  }
}

OpportunityProgress.defaultProps = {

};

OpportunityProgress.PropTypes = {
  progress: PropTypes.number
};

export default OpportunityProgress;