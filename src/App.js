import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import logo from "./logo.svg";
import "./App.css";
import Slider from "./components/Slider/Slider";
import MainPic from "./components/MainPic/MainPic";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainPic />
      </div>
    );
  }
}

export default App;
