import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA7INBUcrLbn2jhIarUnP0-mSPO9c7e-FY",
  authDomain: "journalapp-67109.firebaseapp.com",
  projectId: "journalapp-67109",
  storageBucket: "journalapp-67109.appspot.com",
  messagingSenderId: "173879430574",
  appId: "1:173879430574:web:8e6bff3ad027a5882dcc3f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}