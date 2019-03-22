import React, { Component } from "react";
import $ from "jquery";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import imgurl from "../assets/img/IMG_3687.png";
class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.active = this.active.bind(this);
    this.state = {
      isOpen: false,
      width: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  active(id) {
    $("#home").addClass("active");
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
      <div className='sticky-top'>
        <Navbar color='dark' dark expand='md'>
          <div className='container'>
            <NavbarBrand href='/' className='mybrand'>
              <img
                src={imgurl}
                className='d-inline-block align-top mylogo'
                alt='logo'
              />

              <h1 style={{ color: "white", margin: "5px" }}>XIN</h1>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav id='navItemGroup' className='ml-auto' navbar>
                <NavItem id='home'>
                  <NavLink href='/'>Home</NavLink>
                </NavItem>
                <NavItem id='collection'>
                  <NavLink href='/collection'>Collection</NavLink>
                </NavItem>
                <NavItem id='about'>
                  <NavLink href='#'>About</NavLink>
                </NavItem>
                <NavItem id='contact'>
                  <NavLink href='/contactus'>Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
