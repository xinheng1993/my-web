import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Cover from "./Cover";
import { CardDeck } from "reactstrap";

class MainContent extends Component {
  render() {
    return (
      <div className='card-group'>
        <CardDeck>
          <Cover id={0} />
          <Cover id={1} />
          <Cover id={2} />
          <Cover id={3} />
          <Cover id={4} />
          <Cover id={5} />
          <Cover id={6} />
        </CardDeck>
      </div>
    );
  }
}
export default MainContent;
