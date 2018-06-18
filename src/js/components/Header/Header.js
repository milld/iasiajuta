import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ProfileImage from '../Image/ProfileImage';
import UserService from '../../services/UserService';

class Header extends Component {
  logout() {
    return UserService.logout().then(() => {
      window.location = '/';
    })
    .catch((err) => {
      window.location = '/';
    });
  }

  renderRoutes({ routes }) {
    return routes.map(route => (
      <Link to={route.path} onClick={route.onClick ? route.onClick : () => {}}>{route.title}</Link>
    ));
  }

  addLogoutRoute({ routes }) {
    return {
      routes: !UserService.isLoggedIn() ? routes : routes.concat({
        title: 'Logout',
        path: '/logut',
        onClick: () => {
          UserService.logout().then(() => {
            UserService.deleteUserFromLocalStorage();
          })
          .catch((err) => {
            // TODO: handle error
          });
        }
      })
    };
  }

  profileImage() {
    const ProfileImageProps = {
      src: 'https://stefanmoraru.ro/assets/me.jpg',
      alt: 'Profilul tău',
      link: '/profil'
    };

    return <ProfileImage {...ProfileImageProps} />;
  }

  render() {
    return !UserService.isLoggedIn() ? null : (
      <header>
        <nav>
          {this.renderRoutes(this.addLogoutRoute({...this.props}))}
        </nav>

        {this.profileImage()}
      </header>
    );
  }
}

Header.defaultProps = {
  routes: [
    { title: 'Oportunități', path: '/oportunitati' }
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