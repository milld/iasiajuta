import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB8eSEEmN0GSIk-RNZsNFTW9IYgwv9kMSo',
  authDomain: 'iasiajuta-c3a12.firebaseapp.com',
  databaseURL: 'https://iasiajuta-c3a12.firebaseio.com',
  projectId: 'iasiajuta-c3a12',
  storageBucket: 'iasiajuta-c3a12.appspot.com',
  messagingSenderId: '498580213209'
};

const firebaseApp = firebase.initializeApp(config);

export default {
  /* database: firebaseApp.database(),
  auth: firebaseApp.auth(),
  storage: firebaseApp.storage(),
  googleAuthProvider: new firebaseApp.auth.GoogleAuthProvider(),
  facebookAuthProvider: new firebaseApp.auth.FacebookAuthProvider(),
  messaging: firebaseApp.messaging() */
};