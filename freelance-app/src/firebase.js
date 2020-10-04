import * as firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  
  apiKey: "AIzaSyAZtsBsvkBeSvelVOg-lD2EJzl44qZx83E",
  authDomain: "freelance-app-c411e.firebaseapp.com",
  databaseURL: "https://freelance-app-c411e.firebaseio.com",
  projectId: "freelance-app-c411e",
  storageBucket: "freelance-app-c411e.appspot.com",
  messagingSenderId: "291839381612",
  appId: "1:291839381612:web:b4c3d10027ec5a0bb20849",
  measurementId: "G-GK82C0EBQY"
});


export { firebaseApp };
