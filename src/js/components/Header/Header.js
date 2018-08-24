import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ProfileImage from '../Image/ProfileImage';
//import UserService from '../../services/UserService';

const UserService = {
  getUserFromLocalStorage: () => {
    return {
      id: 'stefan-moraru',
      image: 'http://via.placeholder.com/350x150'
    };
  }
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const user = UserService.getUserFromLocalStorage();

    this.setState({
      user
    });
  }

  logout() {
    return UserService.logout().then(() => {
      window.location = '/';
    })
    .catch((err) => {
      window.location = '/';
    });
  }

  renderRoutes({ routes = [] }) {
    return routes.map(route => (
      <Link to={route.path} onClick={route.onClick ? route.onClick : () => {}}>{route.title}</Link>
    ));
  }

  profileImage({ id, image }) {
    const ProfileImageProps = {
      src: image,
      alt: 'Profilul tău',
      link: `/profil/${id}`
    };

    return <ProfileImage {...ProfileImageProps} />;
  }

  render() {
    let routes = [
      { title: 'Oportunități', path: '/oportunitati' }
    ];

    if (this.state.user) {
      routes = routes.concat({
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
      });
    }

    const profile = this.state.user ? this.profileImage(this.state.user) : null;

    console.log(routes);

    return (
      <header>
        <nav>
          {this.renderRoutes({ routes })}
        </nav>

        {profile}
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