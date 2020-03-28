import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SongItem from "./SongItem";
import { checkSignIn, search } from "../../actions";

import "./index.css";
import "materialize-css/dist/css/materialize.min.css";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      song: ""
    };
  }

  componentWillMount() {
    this.props.checkSignIn();
  }

  render() {
    console.log(this.props.songs);
    const { song } = this.state;
    return (
      <div className="Index">
        <div className="card">
          <div className="card-content">
            <div className="Index-searchBox">
              <input
                type="text"
                className="Inde-searchBox-input"
                placeholder="Search Song, Artist, Album"
                value={this.state.song}
                onChange={e => {
                  this.setState({ song: e.target.value });
                }}
              />
              <a
                className="waves-effect waves-light btn green"
                onClick={e => this.props.search(song)}
              >
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
    routes: state.routes,
    songs: state.player
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      checkSignIn,
      search
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
