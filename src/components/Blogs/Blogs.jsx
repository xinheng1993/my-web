import React, { Component } from "react";
import Navigation from "../Navigation";
import Title from "./Title";
import Desc from "./Desc";
import Content from "./Content";
import Img from "react-image";
import pkq from "../../assets/img/pkaqiu.png";

class Blogs extends Component {
  render() {
    console.log(this.props.location.state.id);
    return this.props.location.state.id ? (
      <div className=''>
        <Navigation />
        <Title title={this.props.location.state.id + "号郑傻逼"} />
        <Desc desc='A short Description' />
        <Img src={pkq} />
        <Content content={this.props.location.state.id} />
      </div>
    ) : (
      <div>Error</div>
    );
  }
}

export default Blogs;
