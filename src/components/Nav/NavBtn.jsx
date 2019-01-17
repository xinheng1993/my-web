import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class NavBtn extends Component {
  render() {
    return (
      <div className='leftnav'>
        <div className='childnav'>Home</div>
        <div className='childnav'>
          <Link to='/blogs' style={{ color: "black" }}>
            Blog
          </Link>
        </div>
        <div className='childnav'>About us</div>
        <div className='childnav'>Contact us</div>
      </div>
    );
  }
}
export default NavBtn;
