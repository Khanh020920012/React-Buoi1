import React, { Component } from "react";

export default function Card(props) {
  let { handleClick, titleCard, username, imgSrc } = props;
  return (
    <div classname="card-text-left">
      <div className="card text-left">
        <img className="card-img-top w-25" src={imgSrc} alt />
        <div className="card-body">
          <h4 className="card-title">{titleCard}</h4>
          <p className="display-2">{username}</p>
          <button onClick={handleClick} className="btn btn-warning">
            Change Name
          </button>
        </div>
      </div>
    </div>
  );
}
