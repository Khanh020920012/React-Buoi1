import React, { Component } from "react";
import Card from "./Card";

export default class DemoProps extends Component {
  state = {
    username: "Iron man",
  };
  handelChangeName = () => {
    this.setState({ username: this.state.username == "Super man" ? "Iron man" : "Super man" });
  };
  render() {
    let title = "User Profile";
    return (
      <div>
        <h2>Demo Prop</h2>
        <Card
          handleClick={this.handelChangeName}
          titleCard={title}
          username={this.state.username}
          imgSrc={
            "https://images.hdqwalls.com/wallpapers/zed-league-of-legends-7c.jpg"
          }
        />
      </div>
    );
  }
}
// state ở đâu, setState ở đó
