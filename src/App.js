import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import logo from "./logo.svg";
import "./App.css";
import Slider from "./components/Slider/Slider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Slider />
      </div>
    );
  }
}

export default App;
