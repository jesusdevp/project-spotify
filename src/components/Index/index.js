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
    this.getResultsCard = this.getResultsCard.bind(this);
  }

  componentWillMount() {
    this.props.checkSignIn();
  }

  getResultsCard() {
    const { songs } = this.props;
    if (songs.length > 0) {
      return (
        <div className="card">
          <div className="card-content">
            {songs.map((currentValue, index) => {
              return (
                <SongItem
                  key={index}
                  songId={currentValue.id}
                  albumPhoto={currentValue.album.images[0].url}
                  algumName={currentValue.album.name}
                  songName={currentValue.name}
                  artistName={currentValue.artists[0].name}
                />
              );
            })}
          </div>
        </div>
      );
    }
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
                onChange={e => {
                  this.setState({ song: e.target.value });
                }}
                value={song}
              />
              <button
                className="waves-effect waves-light btn green"
                onClick={e => this.props.search(song)}
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        {this.getResultsCard()}
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
