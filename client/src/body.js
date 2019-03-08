import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./components/home.jsx";
import Item from "./components/Item/Item.jsx";
import Collection from "./components/collections.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Error from "./components/error";

class Body extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact strict component={Home} />
          <Route path='/collection' exact strict component={Collection} />
          <Route path='/items/:id' exact strict component={Item} />
          <Route path='/contactus' exact strict component={ContactUs} />
          <Error />
        </Switch>
      </Router>
    );
  }
}
export default Body;
