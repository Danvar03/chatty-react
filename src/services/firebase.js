import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAnSFntSVdXQvi6VwRCdpvr3Qriq_frY6U",
    authDomain: "chatty-3367e.firebaseapp.com",
    projectId: "chatty-3367e",
    storageBucket: "chatty-3367e.appspot.com",
    messagingSenderId: "170478416929",
    appId: "1:170478416929:web:8c81b84224aa784dc05f60"
  };

  
  export const firebaseApp =  firebase.initializeApp(firebaseConfig);