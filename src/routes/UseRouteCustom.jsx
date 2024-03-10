import React from "react";
import { useRoutes } from "react-router-dom";
import DemoChiTietProduct from "../DemoUseEffect/DemoChiTietProduct";
import DemoUseEffect from "../DemoUseEffect/DemoUseEffect";
import DemoParams from "../DemoUseEffect/DemoParams";
import DemoScroll from "../DemoUseEffect/DemoScroll";
import DemoForm from "../DemoForm/DemoForm";
import QuanLiNhanVien from "../Ex-Formik/QuanLiNhanVien";
import BaiTap_Formik from "../BaiTap_Formik/BaiTap_Formik";

export default function UseRouteCustom() {
  // hook useParams giúp lấy các giá trị trên param về để sử dụng
  // vd:/detail/iphone-15 thì sẽ bóc tách được iphone-15 về
  let routes = useRoutes([
    {
      path: "/detail",
      element: <DemoChiTietProduct />,
      children: [
        {
          path: "dtdd/:id",
          element: <DemoParams />,
        },
        {
          path: "dong-ho-deo-tay/:id",
          element: <DemoParams />,
        },
      ],
    },
    {
      path: "detail/:id",
      element: <DemoChiTietProduct />,
    },
    {
      path: "/",
      element: <DemoUseEffect />,
    },
    {
      path: "/use-effect",
      element: <DemoScroll />,
    },
    {
      path: "/form",
      element: <DemoForm />,
    },
    {
      path: "/formik",
      element: <QuanLiNhanVien />,
    },
    {
      path: "/baitap",
      element: <BaiTap_Formik />,
    },
  ]);
  return routes;
}
