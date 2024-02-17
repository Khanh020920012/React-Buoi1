import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  renderListShoe = () => {
    return this.props.shoeArr.map((item, index) => {
      return (
        <Item
          data={item}
          key={item.id}
          handleClickView={this.props.handleViewDetail} 
          handleViewCard = {this.props.handleAddToCard}
        />
      );
    });
  };
  render() {
    return <div className="row col-7">{this.renderListShoe()}</div>;
  }
}
