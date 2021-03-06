import React, { Component } from "react";
import $ from "jquery";
import Title from "./Title";
import Desc from "./Desc";
import Content from "./Content";
import Img from "react-image";
import pkq from "../../assets/img/pkaqiu.png";
import Error from "../error";

class Blogs extends Component {
  componentDidMount() {
    $("#navItemGroup")
      .children()
      .removeClass("active");
    $("#collection").addClass("active");
  }
  render() {
    console.log(this.props);
    console.log(this.props.match.params.id);
    return this.props.match.params.id !== undefined ? (
      <div className='container'>
        <Title title={this.props.match.params.id + "号郑重阳"} />
        <Desc desc='A short Description' />
        <Img src={pkq} />
        <Content content={this.props.match.params.id} />
      </div>
    ) : (
      <Error />
    );
  }
}

export default Blogs;
