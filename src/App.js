import React, { Component } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Logo from "./components/Title";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Logo />
        <MainContent />
      </div>
    );
  }
}
export default App;
