import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import pkq from "../assets/img/pkaqiu.png";

class Card extends Component {
  render() {
    return (
      <div className='col-md-4 mycard'>
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
            <li className='list-group-item'>Cras justo odio</li>
            <li className='list-group-item'>Dapibus ac facilisis in</li>
            <li className='list-group-item'>Vestibulum at eros</li>
          </ul>
          <div className='card-body'>
            <a href='localhost' className='card-link'>
              Card link
            </a>
            <a href='localhost' className='card-link'>
              Another link
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
