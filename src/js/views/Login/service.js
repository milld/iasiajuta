import { auth, googleAuthProvider, facebookAuthProvider } from '../../../firebase';

const loginWithGoogle = () => new Promise((resolve, reject) => {
    auth.signInWithPopup(googleAuthProvider).then(({ user, credential}) => {
        resolve({ user, credential });
    })
    .catch((err) => {
        reject(err);
    });
})

const setUserInLocalStorage = (user, credential) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('userCredential', JSON.stringify(credential));
}

const loginWithFacebook = () => new Promise((resolve, reject) => {
    auth.signInWithPopup(facebookAuthProvider).then((response) => {
        resolve(response);
    })
    .catch((err) => {
        reject(err);
    });
})

export default {
    loginWithGoogle,
    setUserInLocalStorage,
    loginWithFacebook
}