import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class NavBtn extends Component {
  render() {
    return (
      <div className='leftnav'>
        <div className='childnav'>Home</div>
        <div className='childnav'>Blog</div>
        <div className='childnav'>About us</div>
        <div className='childnav'>Contact us</div>
      </div>
    );
  }
}
export default NavBtn;
