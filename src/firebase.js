import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4JItG5JlYGgFmvN4kQYs-OiD2NsNfNIA",
  authDomain: "linkedinc-1058d.firebaseapp.com",
  projectId: "linkedinc-1058d",
  storageBucket: "linkedinc-1058d.firebasestorage.app",
  messagingSenderId: "238149205017",
  appId: "1:238149205017:web:7cace8d644b17f02a4be88",
  measurementId: "G-83R9CD62QQ"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
