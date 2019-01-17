import React, { Component } from "react";
import Navigation from "../Navigation";
import Title from "./Title";
import Desc from "./Desc";
import Content from "./Content";
import Img from "react-image";
import pkq from "../../assets/img/pkaqiu.png";

class Blogs extends Component {
  render() {
    return (
      <div className=''>
        <Navigation />
        <Title title='恒欣傻逼' />
        <Desc desc='A short Description' />
        <Img src={pkq} />
        <Content content='asdljnvjksdnvljnsdvuoisnv;asefousfna;sfnasodfnoasfn' />
      </div>
    );
  }
}

export default Blogs;
