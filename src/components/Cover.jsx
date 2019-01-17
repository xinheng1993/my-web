import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import jkAddr from "../assets/img/jk.jpg";

class Cover extends Component {
  constructor() {
    super();
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    this.state = {
      created: date,
      imgUrl: jkAddr,
      desc: "Short Description"
    };
    this.detail = this.detail.bind(this);
  }
  detail() {
    this.props.history.push("/blogs");
  }

  render() {
    return (
      <div className='col-md-4 mycard' onClick={this.detail}>
        <Card>
          <CardBody>
            <CardTitle tag='h3'>Card title</CardTitle>
            <CardText>
              <small className='text-muted'>
                Created: {this.state.created}
              </small>
            </CardText>
          </CardBody>
          <CardImg
            top
            width='80%'
            src={this.state.imgUrl}
            alt='Card image cap'
          />
          <CardBody>
            <CardText> {this.state.desc}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default withRouter(Cover);
