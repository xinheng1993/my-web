import React, { Component } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    );
  }
}
export default App;
