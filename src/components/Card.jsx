import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import pkq from "../assets/img/pkaqiu.png";

class Card extends Component {
  constructor() {
    super();
    this.detail = this.detail.bind(this);
  }
  detail() {
    console.log("go to detail");
  }

  render() {
    return (
      <div className='col-md-4 mycard' onClick={this.detail}>
        <div className='card' style={{ width: "18rem" }}>
          <img className='card-img-top' src={pkq} alt='Card-pic' />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Jan. 16, 2019</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Card;
