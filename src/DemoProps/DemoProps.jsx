import React, { Component, useState } from "react";
import Card from "./Card";

export default function DemoProps() {
  let [username, setName] = useState("iron man");
  let handelChangeName = (name) => {
    setName(name);
  };

  let title = "User Profile";
  return (
    <div>
      <h2>Demo Prop</h2>
      <Card
        handleClick={() => handelChangeName(title)}
        titleCard={title}
        username={username}
        imgSrc={
          "https://images.hdqwalls.com/wallpapers/zed-league-of-legends-7c.jpg"
        }
      />
    </div>
  );
}
// state ở đâu, setState ở đó
