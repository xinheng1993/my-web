import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./home";
import Blogs from "./components/Blogs/Blogs";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blogs' exact component={Blogs} />
          <div>Error</div>
        </Switch>
      </Router>
    );
  }
}
export default App;
