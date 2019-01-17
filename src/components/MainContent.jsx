import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Cover from "./Cover";
import { CardDeck } from "reactstrap";

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      godetail: false,
      selectid: null
    };
    this.detail = this.detail.bind(this);
  }
  detail = id => {
    this.setState({ godetail: true, selectid: id });
  };
  render() {
    return this.state.godetail ? (
      <Redirect
        to={{
          pathname: "/blogs",
          state: { id: this.state.selectid }
        }}
      />
    ) : (
      <div className='card-group'>
        {/* <Blogs /> */}
        <CardDeck>
          <Cover detail={this.detail} id={0} />
          <Cover detail={this.detail} id={1} />
          <Cover detail={this.detail} id={2} />
          <Cover detail={this.detail} id={3} />
          <Cover detail={this.detail} id={4} />
          <Cover detail={this.detail} id={5} />
          <Cover detail={this.detail} id={6} />
        </CardDeck>
      </div>
    );
  }
}
export default MainContent;
