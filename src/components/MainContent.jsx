import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./Card";

class MainContent extends Component {
  render() {
    return (
      <div className='card-group'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
export default MainContent;
