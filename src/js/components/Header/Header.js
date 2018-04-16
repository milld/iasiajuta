import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ProfileImage from '../Image/ProfileImage';
import UserService from '../../services/UserService';

class Header extends Component {
  renderRoutes({routes}) {
    return routes.map(route => (
      <Link to={route.path} onClick={route.onClick ? route.onClick : () => {}}>{route.title}</Link>
    ));
  }

  logout() {
    UserService.logout().then(() => {
      UserService.deleteUserFromLocalStorage();
    })
    .catch((err) => {
      // TODO: handle error
    });
  }

  getLoggedInUser() {
    return UserService.getUserFromLocalStorage();
  }

  generateLogoutButton() {
    //TODO: check if user is logged in
    return <a href='/' onClick={ this.logout.bind(this) }>Logout</a>
  }

  generateNav() {
    const logoutButton = this.generateLogoutButton();
    return (
      <nav>
        {this.renderRoutes({ ...this.props })}
        {logoutButton}
      </nav>
    );
  }

  render() {

    const user = this.getLoggedInUser();
    console.log('loggedInUser: ', user);

    if(!user) {
      return null;
    }

    const nav = this.generateNav();

    const ProfileImageProps = {
      src: user.photoURL,
      alt: 'Profilul tău',
      link: '/profil/' + user.uid 
    };

    return (
      <header>
        {nav}
        <ProfileImage {...ProfileImageProps} />
      </header>
    );
  }
}

Header.defaultProps = {
  routes: [
    { title: 'Oportunități', path: '/oportunitati' },
    { title: 'Logout', path: '/logut', onClick: () => {
      UserService.logout().then(() => {
        UserService.deleteUserFromLocalStorage();
      })
      .catch((err) => {
        // TODO: handle error
      });
    }}
  ]
};

Header.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      onClick: PropTypes.function
    })
  )
};

export default Header;