import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../asset/favicon.ico";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light mynav'>
          <div className='rightnav'>
            <img className='childnav' src={logo} alt='logo' />
            <div className='childnav'>Home</div>
            <div className='childnav'>Blog</div>
            <div className='childnav'>About us</div>
            <div className='childnav'>Contact us</div>
          </div>
          <div className='leftnav'>
            <button>login</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
