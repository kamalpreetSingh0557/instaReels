import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDuzD4Zxey3FwOiw0n9wPyd7JwNzku4Xrk",
    authDomain: "instareelhw.firebaseapp.com",
    projectId: "instareelhw",
    storageBucket: "instareelhw.appspot.com",
    messagingSenderId: "740789149159",
    appId: "1:740789149159:web:dc105267814941d9b5f142"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimeStamp 
}

export const storage = firebase.storage();