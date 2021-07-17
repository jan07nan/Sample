import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC2AVdU-oVibS14On7SRtSyaElsLJ_P45A",
    authDomain: "chitchat-43e86.firebaseapp.com",
    projectId: "chitchat-43e86",
    storageBucket: "chitchat-43e86.appspot.com",
    messagingSenderId: "63795285939",
    appId: "1:63795285939:web:9c135263eea96353d505c6"
};
  
 export const APP = firebase.initializeApp(firebaseConfig);
 export const db = APP.database();   
    

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();