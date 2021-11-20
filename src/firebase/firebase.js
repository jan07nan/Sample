import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDwUwTVZqx8ZJ2CAoy0SKBju5mCH1vAk30",
  authDomain: "chit-chat-856db.firebaseapp.com",
  projectId: "chit-chat-856db",
  storageBucket: "chit-chat-856db.appspot.com",
  messagingSenderId: "337707327855",
  appId: "1:337707327855:web:0734c9d1a0b694a212889a"
  };


  
 export const APP = firebase.initializeApp(firebaseConfig);
 export const db = APP.database();       

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();