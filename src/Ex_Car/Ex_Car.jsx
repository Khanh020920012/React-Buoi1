import React, { Component } from "react";

// sử dụng hình ảnh nằm trong folder public => dẫn url từ html
export default class Ex_Car extends Component {
  state = {
    color: "red",
  };

  handleChangeColor = (color) => {
    this.setState({ color: color });
  };
  render() {
    let url = `./ImageSrc/carBasic/products/${this.state.color}-car.jpg`;
    return (
      <div className=" container ">
        <img style={{ width: "40%" }} src={url} alt="" />

        <button
          onClick={() => {
            this.handleChangeColor("red");
          }}
          className="btn-danger"
        >
          Red
        </button>
        <button
          onClick={() => {
            this.handleChangeColor("black");
          }}
          className="btn-dark"
        >
          Black
        </button>

        <button onClick={() => {
            this.handleChangeColor("silver");
          }} className="btn-secondary">Silver</button>
      </div>
    );
  }
}
