import firebase from 'firebase/compat';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWKlorFQCOVH-R6pIvN0UNKnFnWMJVZTw",
    authDomain: "instagram-clone-a840d.firebaseapp.com",
    databaseURL: "https://instagram-clone-a840d-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-a840d",
    storageBucket: "instagram-clone-a840d.appspot.com",
    messagingSenderId: "375333181484",
    appId: "1:375333181484:web:fe31c40ce7dfc40031d989",
    measurementId: "G-2WXQ5CFKN6"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};