import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCRnZL7YO6bVZmSOCeHVelQSshKx5epmPY",
    authDomain: "lineclone-64e4b.firebaseapp.com",
    projectId: "lineclone-64e4b",
    storageBucket: "lineclone-64e4b.appspot.com",
    messagingSenderId: "529961760114",
    appId: "1:529961760114:web:b1da02706e4b0b0ce5d9eb"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };