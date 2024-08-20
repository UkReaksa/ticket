import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANQPj-cMlxUfKnZO5SgJRpvYAvNS4Ar_A",
  authDomain: "systemlab-da82b.firebaseapp.com",
  projectId: "systemlab-da82b",
  storageBucket: "systemlab-da82b.appspot.com",
  messagingSenderId: "957350059733",
  appId: "1:957350059733:web:dba1d77ea7c1b148130c5c",
  measurementId: "G-7SW9CZCK1J",
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const projectFirestore = firebase.firestore();



export { projectFirestore };
