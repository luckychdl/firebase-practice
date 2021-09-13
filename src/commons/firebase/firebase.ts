import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export const config = {
  apiKey: "AIzaSyDnIUm_X60oLLTOnRHSdwiFIjvi2btG7zc",
  authDomain: "codecamp-446bd.firebaseapp.com",
  projectId: "codecamp-446bd",
  storageBucket: "codecamp-446bd.appspot.com",
  messagingSenderId: "910012870523",
  appId: "1:910012870523:web:26fff320047ea9e3e657de",
  measurementId: "G-R1WX1G4HR0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const dbservice = firebase.firestore();
export default firebase;
