import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/img/logo-red.jpg";

class Logo extends Component {
  render() {
    return (
      <div className='logo'>
        <img className='childnav' src={logo} alt='logo' />
      </div>
    );
  }
}
export default Logo;
