import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Img from 'react-image';
import {
  Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem,
  NavLink,
} from 'reactstrap';

import logoURLSm from '../assets/img/logo-sm2.jpg'
import logoURL from '../assets/img/logo-red.jpg'
class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Img src={this.state.isOpen?logoURLSm:logoURL} />
            
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/Blogs/Blogs">Blogs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
