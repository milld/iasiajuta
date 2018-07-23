import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileImage from '../Image/ProfileImage';
import UserService from '../../services/UserService';
import styled from 'styled-components'

const HeaderContainer = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 3;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  padding: 2px;
  padding-top: 3px;
  box-shadow: 0 0 1px 1px rgba(30, 30, 30, 0.2);
`;

const Nav = styled.div`
  margin-right: 12px;
  margin-left: 8px;
`;

const RouteLink = styled(Link)`
  font-weight: 700;
  color: #2ecc71;
  text-decoration: none;
  margin-left: 8px;
  transition-duration: 0.4s;
  display: inline-block;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    transform: rotate(5deg);
  }

  &:first-child:hover {
    transform: rotate(-5deg);
  }
`;

const Route = ({ path, onClick, title, routeKey }) => (
  <RouteLink key={`route-${routeKey}`} to={path} onClick={onClick ? onClick : () => {}}>{title}</RouteLink>
);

const Routes = ({ routes }) => (
  <div>
    {routes.filter(route => route.visible).map((route, i) => <Route {...route} routeKey={i} />)}
  </div>
);

const MenuUserProfileImage = ({ url, alt, link }) => (
  <ProfileImage src={url} alt={alt} link={link} />
);

const Header = ({ routes, user }) => (
  <HeaderContainer>
    <Nav>
      <Routes routes={routes} />
    </Nav>

    <MenuUserProfileImage {...user.profileImage} />
  </HeaderContainer>
);

//TODO: Move this above in the hierarchy
//return !UserService.isLoggedIn() ? null : (

Header.defaultProps = {
  user: {
    id: 'stefan-moraru',
    profileImage: {
      url: 'https://stefanmoraru.ro/assets/me.jpg',
      alt: 'Stefan Moraru',
      link: '/profil/stefan-moraru'
    }
  },
  routes: [
    {
      title: 'Oportunități',
      path: '/oportunitati',
      visible: UserService.isLoggedIn()
    },
    {
      title: 'Logout',
      path: '/logut',
      onClick: () => {
        UserService.logout()
        .then(UserService.deleteUserFromLocalStorage)
        .then(() => {
          window.location = '/';
        })
        .catch((err) => {
          // TODO: handle error
          window.location = '/';
        });
      },
      visible: UserService.isLoggedIn()
    }
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