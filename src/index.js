import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import App from "./components/App";
import "./assets/index.css";

firebase.initializeApp({
  apiKey: "AIzaSyAvvN7h6MrgkaHI6shbpziuzC96s74wI_w",
  authDomain: "fir-react-f50b5.firebaseapp.com",
  databaseURL: "https://fir-react-f50b5.firebaseio.com",
  projectId: "fir-react-f50b5",
  storageBucket: "fir-react-f50b5.appspot.com",
  messagingSenderId: "726749058037"
});

ReactDOM.render(<App />, document.getElementById("root"));
