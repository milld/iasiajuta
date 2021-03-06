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
        <div className='Homepage__opportunities'>
          <div className='Homepage__opportunities__opportunitycontainer'>
            <div className='Homepage__opportunities__opportunity' style={{ backgroundImage: 'url(https://i.imgur.com/YfO2A3o.jpg' }}>
              <div className='Homepage__opportunities__opportunity__content'>
                <h2 className='Homepage__opportunities__opportunity__title'>Voluntariat IasiAjuta</h2>
                <button className='button button--white'>Vezi detalii</button>
              </div>
            </div>
          </div>
          <div className='Homepage__opportunities__opportunitycontainer'>
            <div className='Homepage__opportunities__opportunity' style={{ backgroundImage: 'url(https://i.imgur.com/YfO2A3o.jpg' }}>
              <div className='Homepage__opportunities__opportunity__content'>
                <h2 className='Homepage__opportunities__opportunity__title'>Voluntariat IasiAjuta</h2>
                <button className='button button--white'>Vezi detalii</button>
              </div>
            </div>
          </div>
          <div className='Homepage__opportunities__opportunitycontainer'>
            <div className='Homepage__opportunities__opportunity' style={{ backgroundImage: 'url(https://i.imgur.com/YfO2A3o.jpg' }}>
              <div className='Homepage__opportunities__opportunity__content'>
                <h2 className='Homepage__opportunities__opportunity__title'>Voluntariat IasiAjuta</h2>
                <button className='button button--white'>Vezi detalii</button>
              </div>
            </div>
          </div>
          <div className='Homepage__opportunities__opportunitycontainer'>
            <div className='Homepage__opportunities__opportunity' style={{ backgroundImage: 'url(https://i.imgur.com/YfO2A3o.jpg' }}>
              <div className='Homepage__opportunities__opportunity__content'>
                <h2 className='Homepage__opportunities__opportunity__title'>Voluntariat IasiAjuta</h2>
                <button>Vezi detalii</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

Opportunities.defaultProps = {
};

export default Opportunities;