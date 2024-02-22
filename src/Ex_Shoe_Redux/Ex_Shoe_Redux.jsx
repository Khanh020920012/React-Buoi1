import React, { Component } from "react";
import List from "./List";
import Item from "./Item";
import Detail from "./Detail";
import Card from "./Card";
import { connect } from "react-redux";

export default class Ex_Shoe_Redux extends Component {
  render() {
    return (
      <div>
        Demo Shoe
        <div className="row w-75">
          <List />
          <Detail />
          <Card />
        </div>
      </div>
    );
  }
}

