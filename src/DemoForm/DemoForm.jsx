import React, { useState } from "react";

export default function DemoForm() {
  let [hoTen, SetHoten] = useState("");
  let handleChange = (event) => {
    console.log(event.target.value);
    SetHoten(event.target.value);
  };
  let handleSubmit = (event) => {
    //event.PreventDefault để ngăn chặn sự kiện load trang
    event.preventDefault();
    console.log(hoTen);
  };

  return (
    <div className="container ">
      <form onSubmit={handleSubmit}>
        <input type="text" id="hoTen" onChange={handleChange} value={hoTen} />
        <button type="submit">Xác nhận</button>
      </form>
    </div>
  );
}
