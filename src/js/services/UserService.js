import { auth, googleAuthProvider, facebookAuthProvider } from '../../firebase';

const USER = 'user';
const USER_CREDENTIAL = 'userCredential';

const loginWithGoogle = () => new Promise((resolve, reject) => {
    auth.signInWithPopup(googleAuthProvider).then(({ user, credential}) => {
        resolve({ user, credential });
    })
    .catch((err) => {
        reject(err);
    });
});

const loginWithFacebook = () => new Promise((resolve, reject) => {
    auth.signInWithPopup(facebookAuthProvider).then(({ user, credential }) => {
        resolve({ user, credential });
    })
    .catch((err) => {
        reject(err);
    });
});

const setUserInLocalStorage = (user, credential) => {
    localStorage.setItem(USER, JSON.stringify(user));
    localStorage.setItem(USER_CREDENTIAL, JSON.stringify(credential));
};

const deleteUserFromLocalStorage = () => {
    localStorage.removeItem(USER);
    localStorage.removeItem(USER_CREDENTIAL);
};

const getUserFromLocalStorage = () => {
    localStorage.getItem(USER);
};

const getUserCredentialFromLocalStorage = () => {
    localStorage.getItem(USER_CREDENTIAL);
};

const logout = () => new Promise((resolve, reject) => {
    auth.signOut().then(function () {
        deleteUserFromLocalStorage();
        resolve();
    }).catch(function (err) {
        deleteUserFromLocalStorage();
        reject(err)
    });
});

const isLoggedIn = () => {
    return true;
};

export default {
    loginWithGoogle,
    loginWithFacebook,
    logout,
    setUserInLocalStorage,
    deleteUserFromLocalStorage,
    getUserFromLocalStorage,
    getUserCredentialFromLocalStorage,
    isLoggedIn
}