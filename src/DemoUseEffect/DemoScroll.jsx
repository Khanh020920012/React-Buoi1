import React, { useEffect, useState } from "react";

export default function DemoScroll() {
  const [check, setcheck] = useState(false);
  useEffect(() => {
    console.log("Tôi là useEffect");
    let onScroll = (event) => {
      console.log(window.pageYOffset);
      console.log("tôi đang được scroll");
      // kiểm tra để thay đổi background màu của nền
      if (window.pageYOffset > 400) {
        console.log("Tôi thấy bạn đang scroll");
        setcheck(true);
      } else {
        setcheck(false);
      }
    };
    window.addEventListener("scroll", onScroll);
  });

  return <div style={{ height: "5000px", background: "red" }}>DemoScroll</div>;
}
