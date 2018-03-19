import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ProfileImage from '../Image/ProfileImage';

class Header extends Component {
  state = {
    menuToggled: false
  };

  toggleMenu() {
    this.setState({
      menuToggled: !this.state.menuToggled
    });
  }

  renderRoutes({routes}) {
    return routes.map(route => (
      <Link to={route.path}>{route.title}</Link>
    ));
  }

  render() {
    const nav = !this.state.menuToggled ? null : (
      <nav>
        {this.renderRoutes({...this.props})}
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
    { title: 'Oportunități', path: '/oportunitati' },
    { title: 'Logout', path: '/loogut' }
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