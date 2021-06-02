import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDybKG0zjSTDACOfznzT8S8-HZs5f_iIiE",
    authDomain: "fbclone-68688.firebaseapp.com",
    projectId: "fbclone-68688",
    storageBucket: "fbclone-68688.appspot.com",
    messagingSenderId: "120389994045",
    appId: "1:120389994045:web:e975378df75d34f44e4c54"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db, storage};