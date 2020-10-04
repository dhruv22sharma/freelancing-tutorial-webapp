import React from 'react';
import './SignIn.css'
import Button from '@material-ui/core/Button'
import * as firebase from 'firebase';
export default function SignIn() {
  var firebaseApp = {
    apiKey: "AIzaSyAZtsBsvkBeSvelVOg-lD2EJzl44qZx83E",
    authDomain: "freelance-app-c411e.firebaseapp.com",
    databaseURL: "https://freelance-app-c411e.firebaseio.com",
    projectId: "freelance-app-c411e",
    storageBucket: "freelance-app-c411e.appspot.com",
    messagingSenderId: "291839381612",
    appId: "1:291839381612:web:b4c3d10027ec5a0bb20849",
    measurementId: "G-GK82C0EBQY"
  };
  firebase.initializeApp(firebaseApp)

  function Login(){
    const x = document.getElementById('mail').value;
    const y = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(x, y).then(l =>(true)).catch(e=>(window.alert("Wrong email or password")))
  }
  return (
    <div className="SignIn">
      <h2 className="Heading">Sign In</h2>
      <input type="email" placeholder="Email" id="mail"></input>
      <input type="password" placeholder="Password" id="password"></input>
      <Button variant="outlined"  className="Button" onClick={Login}>
        Login
      </Button>

    </div>
    
  );
}