import React, { Component } from "react";

import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import "bootstrap/dist/css/bootstrap.css";

class Collections extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className='container'>
          <MainContent />
        </div>
      </div>
    );
  }
}
export default Collections;
