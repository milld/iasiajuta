import React from 'react';
import UserService from '../../services/UserService';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer';
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

    render() {
        return (
            <section className='Login'>
                <BigImage src={this.props.backgroundImage} alt='Volunteering'>
                    <Title content='IașiAjută' subtitle='Drumul spre voluntariat' />

                    <div className='LoginButtons'>
                        <Button content={'Autentifică-te cu Facebook'} onClick={ this.loginWithFacebook.bind(this) } />
                        <Button content={'Autentifică-te cu Google'} onClick={ this.loginWithGoogle.bind(this) } />
                    </div>

                    {this.state.error}
                </BigImage>

                <Footer />
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