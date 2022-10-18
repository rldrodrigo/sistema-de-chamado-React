import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB6bs70QT_3Rrlvhzh1W9wpSVwLNMHYQEg",
    authDomain: "sistema-de-chamados-3c602.firebaseapp.com",
    projectId: "sistema-de-chamados-3c602",
    storageBucket: "sistema-de-chamados-3c602.appspot.com",
    messagingSenderId: "909518000089",
    appId: "1:909518000089:web:a7fff5ad580a06ca2353c8",
    measurementId: "G-XVZQHVHMV4"
  };
  
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;