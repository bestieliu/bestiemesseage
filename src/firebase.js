import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD8bpyh3bjlWhAizryd8sYCEx0rZDbYAxo",
  authDomain: "facebook-messenger-clone-d2392.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-d2392.firebaseio.com",
  projectId: "facebook-messenger-clone-d2392",
  storageBucket: "facebook-messenger-clone-d2392.appspot.com",
  messagingSenderId: "439270729246",
  appId: "1:439270729246:web:63c074dad462edad14b00f",
  measurementId: "G-EXTHY63RZT"
});

 const db = firebaseApp.firestore();

export default db;