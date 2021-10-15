import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


const config = {
    apiKey: "AIzaSyDC1k-nifctQNU7B0W7Ia5r0qRUea8qx4Y",
    authDomain: "chatty-57e3b.firebaseapp.com",
    databaseURL: "https://chatty-3367e-default-rtdb.firebaseio.com/",
    projectId: "chatty-57e3b",
    storageBucket: "chatty-57e3b.appspot.com",
    messagingSenderId: "58299113557",
    appId: "1:58299113557:web:605f948502b53e364574dc",
    //measurementId: "G-YT6B82R12R"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();