import React, { Component } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import LoGo from "./components/Title";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LoGo />
        <MainContent />
      </div>
    );
  }
}
export default App;
