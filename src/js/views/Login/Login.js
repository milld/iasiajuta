import React from 'react';
import { auth, facebookAuthProvider, googleAuthProvider } from '../../../firebase';
import UserService from '../../services/UserService';
import BigImage from '../../components/Image/BigImage';
import Center from '../../components/Center/Center';
import Title from '../../components/Title/Title';
import './Login.css';

class Login extends React.Component {
    state = {
        error: null
    };

    loginWithGoogle() {
        UserService.loginWithGoogle().then(({user, credential}) => {
            UserService.setUserInLocalStorage(user, credential);
            this.props.history.push('/oportunitati');
        })
        .catch((err) => {
            this.setError(err.message);
        });
    }

    loginWithFacebook() {
        UserService.loginWithFacebook().then(({ user, credential }) => {
            UserService.setUserInLocalStorage(user, credential);
            this.props.history.push('/oportunitati');
        })
        .catch((err) => {
            this.setError(err.message);
        });
    }

    setError(message) {
        this.setState({
            error: message
        });
    }

    renderFacebookButton() {
        return <img className='LoginButton' onClick={ this.loginWithFacebook.bind(this) } src='http://www.calgarycounsellors.com/wp-content/uploads/2017/01/facebook-button-connect.png' alt='Login with Facebook' />;
    }

    renderGoogleButton() {
        return <img className='LoginButton' onClick={ this.loginWithGoogle.bind(this) } src='/login_google.png' alt='Login with Google' />;
    }

    render() {
        return (
            <section className='Login'>
                <BigImage src={this.props.backgroundImage} alt='Volunteering'>
                    <Title content='IașiAjută' subtitle='Drumul spre voluntariat' />

                    <div className='LoginButtons'>
                        {this.renderFacebookButton()}
                        {this.renderGoogleButton()}
                    </div>
                    {this.state.error}
                </BigImage>
            </section>
        );
    }
};

Login.defaultProps = {
    backgroundImage: 'https://i.imgur.com/YfO2A3o.jpg',
    title: 'IașiAjută',
    subtitle: 'Drumul spre voluntariat'
};

Login.PropTypes = {
    backgroundImage: React.PropTypes.isRequired
}

export default Login;