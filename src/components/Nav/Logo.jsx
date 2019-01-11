import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from '../../assets/img/logo-red.jpg'
import '../../style.css';

class Logo extends Component {
    render() {
        return (
            <div>
                <img className='childnav' src={logo} alt="logo"></img>
            </div>
        )
    }
}
export default Logo