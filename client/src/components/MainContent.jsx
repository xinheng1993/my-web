import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllBlogs } from "../actions/blogsActions";
import "bootstrap/dist/css/bootstrap.css";
import Cover from "./Cover";
import { CardDeck } from "reactstrap";

class MainContent extends Component {
  componentDidMount() {
    this.props.getAllBlogs();
  }

  render() {
    const oneCover = this.props.allBlogs.map(id => <Cover key={id} id={id} />);
    return (
      <div className='card-group'>
        <CardDeck>{oneCover}</CardDeck>
      </div>
    );
  }
}

MainContent.propTypes = {
  getAllBlogs: PropTypes.func.isRequired,
  allBlogs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({ allBlogs: state.allBlogs });

export default connect(
  mapStateToProps,
  { getAllBlogs }
)(MainContent);
