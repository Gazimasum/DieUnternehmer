import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAUXNvYE497x4TEju22ACpiA_Je6rCJowE",
  authDomain: "dieunternehmer-b2c25.firebaseapp.com",
  databaseURL: "https://dieunternehmer-b2c25.firebaseio.com",
  projectId: "dieunternehmer-b2c25",
  storageBucket: "dieunternehmer-b2c25.appspot.com",
  messagingSenderId: "1004432191133",
  appId: "1:1004432191133:web:342fa03595b866e876ee74",
  measurementId: "G-2HY4WKRTQY",
};
// Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
