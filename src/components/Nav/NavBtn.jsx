import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import '../../style.css';

class NavBtn extends Component {
    render() {
        return (
            <div className='my'>
                <nav className='navbar navbar-expand-lg navbar-light bg-light mynav'>
                    <div className='rightnav'>
                        {/* <img className='childnav' src={logo} alt="logo"></img> */}
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
        )
    }
}
export default NavBtn;