import React, { Component } from "react";
import $ from "jquery";
import * as EmailValidator from "email-validator";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Col,
  Form
} from "react-bootstrap";

class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  componentDidMount() {
    $("#navItemGroup")
      .children()
      .removeClass("active");
    $("#contact").addClass("active");
  }
  getValidationState() {
    if (this.state.email.length > 0) {
      return EmailValidator.validate(this.state.email) ? "success" : "error";
    }
    return null;
  }
  render() {
    return (
      <div className='container'>
        <div className='outborder'>
          <div className='innerborder'>
            <Form horizontal>
              <FormGroup bsSize='lg' controlId='firstName'>
                <Col componentClass={ControlLabel} md={2}>
                  First Name
                </Col>
                <Col md={3}>
                  <FormControl
                    type='text'
                    name='firstName'
                    value={this.state.firstName}
                    placeholder='first name'
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                </Col>
              </FormGroup>
              <FormGroup bsSize='lg' controlId='lastName'>
                <Col componentClass={ControlLabel} md={2}>
                  Last Name
                </Col>
                <Col md={3}>
                  <FormControl
                    type='text'
                    name='lastName'
                    value={this.state.lastName}
                    placeholder='last name'
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                </Col>
              </FormGroup>
              <FormGroup
                controlId='email'
                bsSize='lg'
                validationState={this.getValidationState()}
              >
                <Col componentClass={ControlLabel} md={2}>
                  Email
                </Col>
                <Col md={6}>
                  <FormControl
                    type='text'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>123abc@gmail.com</HelpBlock>
                </Col>
              </FormGroup>
              <FormGroup bsSize='lg' controlId='message'>
                <Col componentClass={ControlLabel} md={2}>
                  Message:
                </Col>
                <Col md={8}>
                  <FormControl
                    componentClass='textarea'
                    name='message'
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactUs;
