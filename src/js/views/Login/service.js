import { auth, googleAuthProvider, facebookAuthProvider } from '../../../firebase';

let loginWithGoogle = () => new Promise((resolve, reject) => {
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

let loginWithFacebook = () => new Promise((resolve, reject) => {
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