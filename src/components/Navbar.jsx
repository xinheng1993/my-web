import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Logo from './Nav/Logo';
import NavBtn from './Nav/NavBtn';
import Login from './Nav/Login';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Logo />
        <NavBtn />
        <Login />
      </div>
    );
  }
}

export default Navbar;
