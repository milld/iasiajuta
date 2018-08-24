import React, { Component, PropTypes } from 'react';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';
import Opportunities from '../../components/Opportunities/Opportunities';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import ProfileImage from '../../components/Image/ProfileImage';
import ProfileProgress from './ProfileProgress';
//import UserService from '../../services/UserService';
import './Profil.css';

const UserService = {
  getUser: () => {
    return Promise.resolve({
      firstName: 'Stefan',
      lastName: 'Moraru',
      middleName: null,
      image: "http://via.placeholder.com/350x150",
      history: {
        '1': {
          //Oportunitate
          title: '...'
        }
      }
    });
  }
};

class Profil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const userId = this.props.math;

    return UserService.getUser({ id: userId }).then(this.saveUser.bind(this));
  }

  saveUser(user) {
    this.setState({
      user
    });
  }

  //TODO: Add loading
  render() {
    if (!this.state.user) {
      return (
        <div>
          404
        </div>
      );
    }

    //<ProfileProgress />

    return (
      <div className='Profil'>
        <BigImage src={this.props.backgroundImage} alt='Volunteering'>
          <ProfileImage src={this.state.user.image} />
          <Title content={`${this.state.user.firstName} ${this.state.user.lastName}`} />
          <Opportunities userId={this.state.user.id} />
          <Footer />
        </BigImage>
      </div>
    );
  };
}

Profil.defaultProps = {
  backgroundImage: 'https://cvhf.org.uk/wp-content/uploads/2015/11/volunteering-1400x630.jpg?x35849',
  title: 'IașiAjută',
  subtitle: 'Emilian Damian'
};

Profil.PropTypes = {
};

export default Profil;