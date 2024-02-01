import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    soLuong: 1,
  };
  // this.setState ~ update data nằm trong state
  handleTang = () => {
    // this.state.soLuong = 100 ; update trực tiếp => lỗi

    this.setState({ soLuong: this.state.soLuong + 1 });
  };
  handleGiam = (number) => {
  
    this.setState({ soLuong: this.state.soLuong - number });
  };
  render() {
    return (
      <div>
        <div className="text-center">
          <button
            onClick={() => {
              this.handleGiam(10);
            }}
          >
            -
          </button>

          <strong>{this.state.soLuong}</strong>

          <button onClick={this.handleTang}>+</button>
        </div>
      </div>
    );
  }
}
