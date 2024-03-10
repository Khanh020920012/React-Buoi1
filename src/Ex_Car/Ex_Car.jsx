import React, { Component } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

// sử dụng hình ảnh nằm trong folder public => dẫn url từ html
export default function Ex_Car() {
  let [color, setColor] = useState("red");

  let handleChangeColor = (rewColor) => {
    setColor(rewColor);
  };
  // render() {
  let url = `./ImageSrc/carBasic/products/${color}-car.jpg`;
  return (
    <div className=" container ">
      <img style={{ width: "40%" }} src={url} alt="" />

      <button
        onClick={() => {
          handleChangeColor("red");
        }}
        className="btn-danger"
      >
        Red
      </button>
      <button
        onClick={() => {
          handleChangeColor("black");
        }}
        className="btn-dark"
      >
        Black
      </button>

      <button
        onClick={() => {
          handleChangeColor("silver");
        }}
        className="btn-secondary"
      >
        Silver
      </button>
    </div>
  );
}

// }
