import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SongItem from "./SongItem";

import "./index.css";
import "materialize-css/dist/css/materialize.min.css";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      song: ""
    };
  }
  render() {
    return (
      <div className="Index">
        <div className="card">
          <div className="card-content">
            <div className="Index-searchBox">
              <input
                type="text"
                className="Inde-searchBox-input"
                placeholder="Song"
                value={this.state.song}
                onChange={e => {
                  this.setState({ song: e.target.value });
                }}
              />
              <a className="waves-effect waves-light btn green">
                <i className="fa fa-search"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="card Index-results-card">
          <div className="card-content"></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    routes: state.routes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
