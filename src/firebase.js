import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB8eSEEmN0GSIk-RNZsNFTW9IYgwv9kMSo',
  authDomain: 'iasiajuta-c3a12.firebaseapp.com',
  databaseURL: 'https://iasiajuta-c3a12.firebaseio.com',
  projectId: 'iasiajuta-c3a12',
  storageBucket: 'iasiajuta-c3a12.appspot.com',
  messagingSenderId: '498580213209'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();