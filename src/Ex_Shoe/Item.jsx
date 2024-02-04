import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { image, name } = this.props.data;
    return (
      <div className="col-3">
        <img src={image} alt="" className="w-100" />
        <h6>{name}</h6>
        <button className="btn btn-dark">Add</button>
        <button
          onClick={() => {
            this.props.handleClickView(this.props.data);
          }}
          className="btn btn-secondary"
        >
          View
        </button>
      </div>
    );
  }
}
