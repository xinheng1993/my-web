import React, { Component } from "react";

import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MainContent />
      </div>
    );
  }
}
export default Home;
