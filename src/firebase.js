import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAkVAgBegcPtXShIp9D-RfXJ2m55DYELL0",
  authDomain: "surveasy-storage.firebaseapp.com",
  projectId: "surveasy-storage",
  storageBucket: "surveasy-storage.appspot.com",
  messagingSenderId: "610824367378",
  appId: "1:610824367378:web:0ae2ef43feac0d002ed7cb",
  storageBucket: "gs://surveasy-storage.appspot.com/"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebase.storage();
