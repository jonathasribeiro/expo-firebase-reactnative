import React, { Component } from "react";
import Index from "./src/index";
import * as firebase from "firebase";

export default class App extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
    const config = {
      apiKey: "AIzaSyAgg_yDXt1Qoutu7hcOdXXOrFhiVBHjWeE",
      authDomain: "start-cbaa5.firebaseapp.com",
      databaseURL: "https://start-cbaa5.firebaseio.com",
      projectId: "start-cbaa5",
      storageBucket: "start-cbaa5.appspot.com",
      messagingSenderId: "633975796254",
      appId: "1:633975796254:web:c575d3fe2edca55338740f",
      measurementId: "G-99DF5G1L1G"
    };
    firebase.initializeApp(config);
  }

  render() {
    return <Index />;
  }
}
