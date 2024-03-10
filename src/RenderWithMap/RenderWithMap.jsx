import React, { Component } from "react";
import { movieArr } from "./data";

export default function RenderWithMap() {
  let renderMovieList = () => {
    console.log(movieArr);
    return movieArr.map((item) => {
      return (
        <div className="card text-left col-2">
          <img
            className="card-img-top"
            style={{ height: 200, objectFit: "cover" }}
            src={item.hinhAnh}
            alt
          />
          <div className="card-body">
            <h6 className="card-title">{item.tenPhim}</h6>
          </div>
        </div>
      );
    });
  };

  return <div className="row">{renderMovieList()}</div>;
}
