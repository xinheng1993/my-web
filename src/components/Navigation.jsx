import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Img from 'react-image';
import {
  Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem,
  NavLink,
} from 'reactstrap';

import logoURLSm from '../assets/img/logo-sm.png'
import logoURL from '../assets/img/logo-red.png'
class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      width: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  //window size 767.5
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Img style={{width: '80%'}} src={this.state.width > 767.5?logoURL:logoURLSm} />
            
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
