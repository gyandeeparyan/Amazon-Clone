import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDr27zJ6VCBJoBXloP7V9Vk78gRca9oivE",
    authDomain: "clone-72a4b.firebaseapp.com",
    projectId: "clone-72a4b",
    storageBucket: "clone-72a4b.appspot.com",
    messagingSenderId: "104339406797",
    appId: "1:104339406797:web:0d1f0f8d58249c8e3d0e84",
    measurementId: "G-B68BJ55P45"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export function signup(email, password) {
createUserWithEmailAndPassword(auth, email, password)

}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}
