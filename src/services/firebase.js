import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyDx7KE8YH9NvjD_F-LnsLoFJVmVGnVMjcE",
  authDomain: "chatty-8fdfb.firebaseapp.com",
  databaseURL: "https://chatty-8fdfb-default-rtdb.firebaseio.com/",
  projectId: "chatty-8fdfb",
  storageBucket: "chatty-8fdfb.appspot.com",
  messagingSenderId: "1040375649949",
  appId: "1:1040375649949:web:547a22b17f1d178647a674"
    
  };
  firebase.initializeApp(config);
  
  export const auth = firebase.auth;
  export const db = firebase.database();