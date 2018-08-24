import React, { Component } from 'react';
import Opportunity from '../Opportunity/Opportunity';
import './Opportunities.css';

import OpportunityService from '../../services/OpportunityService';

class Opportunities extends Component {

  state = {
    opportunities: [],
    error: null
  };

  componentDidMount() {
    OpportunityService.registerOpportunityListener(this.setOpportunitiesInState, this.setError);
  }

  componentWillUnmount() {
    OpportunityService.unregisterOpportunityListener();
  }

  setInState(prop, value) {
    this.setState({
      prop: value
    })
  }

  setError(error) {
    this.setInState('error', error);
  }

  setOpportunitiesInState(opportunities) {
    this.setInState('opportunities', opportunities)
  }

  createOpportunities() {
    return this.state.opportunities.map((opportunity) => {
      <Opportunity opportunity={opportunity}/>
    });
  }

  render() {

    if (this.state.error) {
      return (
        <div className='error'>
          {this.state.error}
        </div>
      )
    }

    const opportunities = this.createOpportunities();

    return (
      <div className='Opportunities'>
        {opportunities}
      </div>
    )
  };
}

Opportunities.defaultProps = {
};

export default Opportunities;