import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmYPcnj9FgZ52q31hpNAAFX7c57hk-ylI",
  authDomain: "polchat-5b74b.firebaseapp.com",
  projectId: "polchat-5b74b",
  storageBucket: "polchat-5b74b.appspot.com",
  messagingSenderId: "562443960843",
  appId: "1:562443960843:web:adba2816497e9d9987fd0e",
  measurementId: "G-L7DWVEZ4VM"
};

// Use this to initialize the firebase App
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
    timestampsInSnapshots: true
})
  

export const Firebase = firebase
export const Firestore = firebase.firestore()
export const FirebaseStorage = firebase.storage()
