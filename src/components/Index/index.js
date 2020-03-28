import React, { Component } from "react";

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
                <i class="fa fa-search"></i>
              </a>
              <div>{/* {TODO} */}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
