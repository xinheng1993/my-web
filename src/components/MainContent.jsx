import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./Card";
import Blogs from './Blogs/Blogs'

class MainContent extends Component {
  render() {
    return (
      <div className='card-group'>
      <Blogs />
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    );
  }
}
export default MainContent;
