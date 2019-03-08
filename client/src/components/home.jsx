import React, { Component } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  componentDidMount() {
    $("#navItemGroup")
      .children()
      .removeClass("active");
    $("#home").addClass("active");
  }
  render() {
    return <div className='container'>home</div>;
  }
}
export default Home;
