import React, { Component } from "react";
import Navigation from "../Navigation";
import Title from "./Title";
import Desc from "./Desc";
import Content from "./Content";
import Img from "react-image";
import pkq from "../../assets/img/pkaqiu.png";
import Error from "../error";

class Blogs extends Component {
  render() {
    console.log(this.props.location.state.id);
    return this.props.location.state.id !== undefined ? (
      <div className=''>
        <Navigation />
        <Title title={this.props.location.state.id + "号郑重阳"} />
        <Desc desc='A short Description' />
        <Img src={pkq} />
        <Content content={this.props.location.state.id} />
      </div>
    ) : (
      <Error />
    );
  }
}

export default Blogs;
