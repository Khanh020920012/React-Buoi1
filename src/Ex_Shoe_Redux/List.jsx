import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";

class List extends Component {
  renderListShoe = () => {
    return this.props.shoeArr.map((item, index) => {
      return (
        <Item
          data={item}
          key={item.id}
        
        />
      );
    });
  };
  render() {
    return <div className="row col-7">{this.renderListShoe()}</div>;
  }
}

let mapstateToProps = (state) => {
  return { shoeArr: state.shoeArr };
};

export default connect(mapstateToProps)(List);
