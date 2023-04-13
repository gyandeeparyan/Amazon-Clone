import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDr27zJ6VCBJoBXloP7V9Vk78gRca9oivE",
    authDomain: "clone-72a4b.firebaseapp.com",
    projectId: "clone-72a4b",
    storageBucket: "clone-72a4b.appspot.com",
    messagingSenderId: "104339406797",
    appId: "1:104339406797:web:0d1f0f8d58249c8e3d0e84",
    measurementId: "G-B68BJ55P45"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export default { db, auth };

