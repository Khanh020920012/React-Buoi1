import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div classname="card-text-left">
        <div className="card text-left">
          <img className="card-img-top w-25" src={this.props.imgSrc} alt />
          <div className="card-body">
            <h4 className="card-title">{this.props.titleCard}</h4>
            <p className="display-2">{this.props.username}</p>
            <button
              onClick={this.props.handleClick}
              className="btn btn-warning"
            >
              Change Name
            </button>
          </div>
        </div>
      </div>
    );
  }
}
