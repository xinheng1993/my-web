import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./home";
import Blogs from "./components/Blogs/Blogs";
import ContactUs from "./components/ContactUs";
import Error from "./components/error";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact strict component={Home} />
          <Route path='/blogs/:id' exact strict component={Blogs} />
          <Route path='/contactus' exact strict component={ContactUs} />
          <Error />
        </Switch>
      </Router>
    );
  }
}
export default App;
