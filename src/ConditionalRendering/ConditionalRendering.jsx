import React, { Component } from "react";

export default class ConditionalRendering extends Component {
  state = {
    isLogin: true,
  };
  handleLogin = () => {
    this.setState({ isLogin: true });
  };
  handleLogout = () => {
    this.setState({ isLogin: false });
  };
  renderButton = () => {
    if (this.state.isLogin) {
      return (
        <button onClick={this.handleLogout} className="btn-danger">
          Đăng Xuất
        </button>
      );
    } else {
      return (
        <button onClick={this.handleLogin} className="btn-success">
          Đăng nhập
        </button>
      );
    }
  };
  render() {
    return <div>{this.renderButton()}</div>;
  }
}
