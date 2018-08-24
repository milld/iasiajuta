import React, { Component, PropTypes } from 'react';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import ProfileImage from '../../components/Image/ProfileImage';
import OpportunityProgress from '../../components/Opportunity/OpportunityProgress';
import './Oportunitati.css';

class OportunitateNoua extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      image: '',
      days: []
    };
  }

  addDay() {
    this.setState({
      days: this.state.days.concat({
        id: (Math.random() * 100).toString(),
        start: new Date(),
        end: new Date()
      })
    });
  }

  removeDay({ id }) {
    this.setState({
      days: this.state.days.filter(day => day.id !== id)
    });
  }

  updateDayTime(id, field, event) {
    this.setState({
      days: this.state.days.map(day => {
        if (day.id === id) {
          day[field] = event.target.value;
        }

        return day;
      })
    });
  }

  renderDays(days = []) {
    return days.map(day => (
      <div>
        Data
        <input type="date" value={day.date} onChange={this.updateDayTime.bind(this, day.id, 'date')} />

        Inceput
        <input type='text' value={day.start} placeholder='00:00' />

        Sfarsit
        <input type='text' value={day.end} placeholder='00:00' />
      </div>
    ));
  }

  addDay() {
    this.setState({
      days: this.state.days.concat({})
    });
  }

  createNewOpportunity() {
    //TODO
    const opportunity = this.state;
  }

  render() {
    return (
      <div className='OportunitateNoua'>
        <BigImage src={'https://i.imgur.com/BZ4DPfR.jpg'} small={true}>
          <Title content={'Oportunitate noua'} />
        </BigImage>

        <div className='Oportunitati-Content-Container'>
          <div className='Oportunitati-Content'>
            Titlu oportunitate
            <input type='text' />
            Descriere
            <textarea></textarea>
            Adauga imagine
            <input type='file' />

            Zile
            <button onClick={this.addDay.bind(this)}>Adauga zi</button>
            {this.renderDays(this.state.days)}

            <div>
              <Button content={'Noua'} onClick={this.createNewOpportunity.bind(this)} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

OportunitateNoua.defaultProps = {
  description: null
};

OportunitateNoua.PropTypes = {
  description: PropTypes.string
};

export default OportunitateNoua;