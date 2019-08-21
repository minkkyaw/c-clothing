import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDv5x6VnHo65RwVhshq9B3PUROa1dC2MDM',
  authDomain: 'crwn-db-145ae.firebaseapp.com',
  databaseURL: 'https://crwn-db-145ae.firebaseio.com',
  projectId: 'crwn-db-145ae',
  storageBucket: '',
  messagingSenderId: '645390253596',
  appId: '1:645390253596:web:7da0105ed9104d76'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
