import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Error extends Component {
  render() {
    return <Redirect to='/' />;
  }
}

export default Error;
