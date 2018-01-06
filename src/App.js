import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import logo from "./logo.svg";
import "./App.css";
import Slider from "./components/Slider/Slider";
import MainPic from "./components/MainPic/MainPic";
import Factoid from "./components/Factoid/Factoid";
import Search from "./components/Search/Search";
import ProfileCard from "./components/ProfileCard/ProfileCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainPic />
        <Factoid />
        <Search />
        <ProfileCard />
      </div>
    );
  }
}

export default App;
