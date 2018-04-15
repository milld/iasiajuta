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

<<<<<<< HEAD
=======
  logout() {
    UserService.logout().then(() => {
      UserService.deleteUserFromLocalStorage();
    })
    .catch((err) => {
      // TODO: handle error
    });
  }

  generateLogoutButton() {
    //TODO: check if user is logged in
    return <a href='/' onClick={ this.logout.bind(this) }>Logout</a>
  }

>>>>>>> 5d264b32536ffe12ae552fb44bcf115763fe6518
  render() {
    const ProfileImageProps = {
      src: 'https://stefanmoraru.ro/assets/me.jpg',
      alt: 'Profilul tău',
      link: '/profil'
    };

    return (
      <header>
        <nav>
          {this.renderRoutes({...this.props})}
        </nav>

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