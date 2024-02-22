import React, { Component } from "react";
import { connect } from "react-redux";

class Item extends Component {
  render() {
    let { image, name } = this.props.data;
    return (
      <div className="col-3">
        <img src={image} alt="" className="w-100" />
        <h6>{name}</h6>
        <button
          onClick={() => {
            this.props.handleViewCard(this.props.data);
          }}
          className="btn btn-dark"
        >
          Add
        </button>
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
let mapDisPatchToProps = (dispatch) => {
  return {
    handleClickView: (shoe) => {
      let action = {
        type: "VIEW_DETAIL",
        payload: shoe,
      };
      dispatch(action);
    },
    handleViewCard: (shoe) => {
      let action = {
        type: "ADD_SHOE",
        payload: shoe,
      };
      dispatch(action)
    },
  };
};
export default connect(null, mapDisPatchToProps)(Item);
//
