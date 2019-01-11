import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "./Nav/Logo";
import NavBtn from "./Nav/NavBtn";
import Login from "./Nav/Login";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className='my'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light mynav'>
          <div className='leftnav'>
            <Logo />
            <NavBtn />
          </div>
          <div className='rightnav'>
            <Login />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
