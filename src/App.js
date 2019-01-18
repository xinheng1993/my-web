import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./home";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <div>Error</div>
        </Switch>
      </Router>
    );
  }
}
export default App;
