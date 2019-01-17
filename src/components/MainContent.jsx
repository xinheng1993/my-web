import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Cover from "./Cover";
import {CardDeck} from 'reactstrap'
import Blogs from './Blogs/Blogs'

class MainContent extends Component {
  render() {
    return (
      <div className='card-group'>
        <Blogs />
        <CardDeck>
          <Cover />
          <Cover />
          <Cover />
          <Cover />
          <Cover />
          <Cover />
          <Cover />
        </CardDeck>
      </div>
    );
  }
}
export default MainContent;
