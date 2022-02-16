import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWDTc7KjSob5pJ8jSVRE2JV7Lm5dM0FM0",
  authDomain: "insta-reels-2dda3.firebaseapp.com",
  projectId: "insta-reels-2dda3",
  storageBucket: "insta-reels-2dda3.appspot.com",
  messagingSenderId: "815731560416",
  appId: "1:815731560416:web:b4ae712d4b2ae8a5456585"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp
  }

export const storage = firebase.storage();