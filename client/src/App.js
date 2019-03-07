import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./home";
import Item from "./components/Item/Item";
import Collection from "./collections";
import ContactUs from "./components/ContactUs";
import Error from "./components/error";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact strict component={Home} />
          <Route path='/collection' exact strict component={Collection} />
          <Route path='/blogs/:id' exact strict component={Item} />
          <Route path='/contactus' exact strict component={ContactUs} />
          <Error />
        </Switch>
      </Router>
    );
  }
}
export default App;
