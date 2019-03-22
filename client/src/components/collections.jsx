import React, { Component } from "react";
import MainContent from "./MainContent";
import Footer from "./Footer";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";

class Collections extends Component {
  componentDidMount() {
    $("#navItemGroup")
      .children()
      .removeClass("active");
    $("#collection").addClass("active");
  }
  render() {
    return (
      <div className='container'>
        <MainContent />
        <Footer />
      </div>
    );
  }
}
export default Collections;
