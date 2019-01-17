import React, { Component } from "react";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MainContent />
      </div>
    );
  }
}
export default App;
