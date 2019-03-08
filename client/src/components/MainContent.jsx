import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllItems } from "../actions/itemsActions";
import "bootstrap/dist/css/bootstrap.css";
import Cover from "./Cover";
import { CardDeck } from "reactstrap";

class MainContent extends Component {
  componentDidMount() {
    this.props.getAllItems();
  }

  render() {
    const oneCover = this.props.allItems.map(id => <Cover key={id} id={id} />);
    return (
      <div className='card-group'>
        <CardDeck>{oneCover}</CardDeck>
      </div>
    );
  }
}

MainContent.propTypes = {
  getAllItems: PropTypes.func.isRequired,
  allItems: PropTypes.array.isRequired
};

const mapStateToProps = state => ({ allItems: state.allItems });

export default connect(
  mapStateToProps,
  { getAllItems }
)(MainContent);
