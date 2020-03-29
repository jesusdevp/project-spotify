import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { playTrack, checkSignIn } from "../../actions";

import "./index.css";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songId: this.props.match.params.songId
    };
  }

  // componentWillMount() {
  //   this.props.checkSignIn();
  //   this.props.playTrack(this.state.songId);
  // }

  render() {
    return (
      <div className="Player">
        <div className="card">
          <div className="card-content">
            <div className="Player-left">
              <img alt="img-album" />
            </div>
            <div className="Player-right"></div>
          </div>
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
  return bindActionCreators({ checkSignIn, playTrack }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
