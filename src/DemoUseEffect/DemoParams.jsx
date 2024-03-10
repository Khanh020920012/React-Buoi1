import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function DemoParams() {
  let id = useParams();
  let location = useLocation();

  console.log("🚀 ~ DemoParams ~ location:", location);
  console.log("🚀 ~ DemoParams ~ id:", id);
  let arrayConvert = location.pathname.split("/");
  console.log("🚀 ~ DemoParams ~ arrayConvert:", arrayConvert);

  let string = arrayConvert.join("/");
  console.log("🚀 ~ DemoParams ~ string:", string);

  return <div>DemoParams</div>;
}
