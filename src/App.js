import React, { Component } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainContent />
      </div>
    );
  }
}
export default App;
