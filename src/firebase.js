import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyA7_5QxPUUuxUhQIep5JNApnst68vbWK0c",
  authDomain: "akz--clone-9d1ee.firebaseapp.com",
  databaseURL: "https://akz--clone-9d1ee-default-rtdb.firebaseio.com",
  projectId: "akz--clone-9d1ee",
  storageBucket: "akz--clone-9d1ee.appspot.com",
  messagingSenderId: "141183948637",
  appId: "1:141183948637:web:e4f1939f11eea305377ab4",
  measurementId: "G-RPGJD4KNQC"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { db , auth, provider}