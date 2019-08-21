import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAbhqhRBGjioKE253awLcAr6CexFQkjgNk',
  authDomain: 'crown-db-53bb5.firebaseapp.com',
  databaseURL: 'https://crown-db-53bb5.firebaseio.com',
  projectId: 'crown-db-53bb5',
  storageBucket: '',
  messagingSenderId: '480820529952',
  appId: '1:480820529952:web:7b5440f384756779'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
