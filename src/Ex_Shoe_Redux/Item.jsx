import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_SHOE, VIEW_DETAIL } from "./redux/constant";
import { addShoeAction, viewDetailAction } from "./redux/action";

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
      dispatch(viewDetailAction(shoe));
    },
    handleViewCard: (shoe) => {
      dispatch(addShoeAction(shoe));
    },
  };
};
export default connect(null, mapDisPatchToProps)(Item);
//
