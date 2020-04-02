import React, { Component } from "react";
import { Route, Router } from "react-router";
import PropTypes from "prop-types";
import "./App.css";
import index from "./components/Index/index";
import Player from "./components/Player";

class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <div>
          <Route exact path="/" component={index} />
          <Route path="/player/:songId" component={Player} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  history: PropTypes.any
};

export default App;
