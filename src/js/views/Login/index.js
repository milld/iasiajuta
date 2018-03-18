import React from 'react';
import { auth, facebookAuthProvider, googleAuthProvider } from '../../../firebase';
import UserService from './service';

class Login extends React.Component {

    state = {
        error: null
    };

    loginWithGoogle() {
        UserService.loginWithGoogle().then(({user, credential}) => {
            UserService.setUserInLocalStorage(user, credential);
        })
        .catch((err) => {
            this.setError(err.message);
        });
    }

    loginWithFacebook() {
        UserService.loginWithFacebook.then((response) => {
            console.log(response);
            //UserService.setUserInLocalStorage(user, credential);
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

    render() {

        return (
            <div>
                <button onClick={ this.loginWithGoogle.bind(this) }>Login using Google</button>
                <button onClick={ this.loginWithFacebook.bind(this) }>Login using Facebook</button>
                { this.state.error }
            </div>
        );

    }

};

export default Login;