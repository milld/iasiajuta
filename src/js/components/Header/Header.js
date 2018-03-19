import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ProfileImage from '../Image/ProfileImage';
import UserService from '../../services/UserService';

class Header extends Component {
  state = {
    menuToggled: false,
    resetTimeout: null
  };

  toggleMenu() {
    this.setState({
      menuToggled: !this.state.menuToggled
    }, () => {
      if (this.state.menuToggled) {
        if (this.state.resetTimeout) {
          clearTimeout(this.state.resetTimeout);
        }

        this.setState({
          resetTimeout: setTimeout(() => {
            this.setState({
              menuToggled: false
            });
          }, 10000)
        });
      }
    });
  }

  renderRoutes({routes}) {
    return routes.map(route => (
      <Link to={route.path}>{route.title}</Link>
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

  generateLogoutButton() {
    return <a href='/' onClick = { this.logout.bind(this) }>Logout</a>
  }

  render() {
    const logoutButton = this.generateLogoutButton();
    const nav = !this.state.menuToggled ? null : (
      <nav>
        {this.renderRoutes({...this.props})}
        {logoutButton}
      </nav>
    );

    const ProfileImageProps = {
      src: 'https://stefanmoraru.ro/assets/me.jpg',
      alt: 'Profilul tău',
      link: '/profil'
    };

    return (
      <header>
        {nav}
        <i className="fas fa-bars" onClick={this.toggleMenu.bind(this)}></i>

        <ProfileImage {...ProfileImageProps} />
      </header>
    );
  }
}

Header.defaultProps = {
  routes: [
    { title: 'Acasă', path: '/' },
    { title: 'Oportunități', path: '/oportunitati' }
  ]
};

Header.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  )
};

export default Header;