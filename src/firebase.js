import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBusxuY7BM4HIne5AAnjj9Cnl5wBqB8nw",
    authDomain: "linkedin-clone-yt-cd9ca.firebaseapp.com",
    projectId: "linkedin-clone-yt-cd9ca",
    storageBucket: "linkedin-clone-yt-cd9ca.appspot.com",
    messagingSenderId: "749069401920",
    appId: "1:749069401920:web:0022f0f7c26d81ff9204a5"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
