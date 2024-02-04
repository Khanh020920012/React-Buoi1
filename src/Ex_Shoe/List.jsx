import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  renderListShoe = () => {
    return this.props.shoeArr.map((item, index) => {
      return <Item data={item} key={item.id} handleClickView = {this.props.handleViewDetail}/>;
    });
  };
  render() {
    return <div className="row">{this.renderListShoe()}</div>;
  }
}
