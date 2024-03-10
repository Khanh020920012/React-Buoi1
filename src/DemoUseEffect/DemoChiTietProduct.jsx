import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";

export default function DemoChiTietProduct() {
  //hook useParams
  let { id } = useParams();
  const [detail, setDetail] = useState({});
  const navigation = useNavigate();
  console.log("🚀 ~ DemoChiTietProduct ~ id:", id);
  // useEffect chạy component didupdate
  let getProductById = async () => {
    let res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: "GET",
    });
    setDetail(res.data.content);
  };
  // useEffect chạy component didupdate
  // thường dùng để xử lí cho các trang chi tiết về sản phẩm , hoặc với trường hợp cần xử lí khi một tham số thay đổi
  useEffect(() => {
    getProductById();
    // lệnh return giúp chạy component willunmount
    return () => {
      console.log("tôi đã thoát khỏi trang chi tiết");
    };
  }, [id]);
  return (
    <div>
      DemoChiTietProduct
      <Outlet />
      <NavLink to="/">Quay về trang chủ</NavLink>
      <div>
        <img src={detail.image} alt="" />
        <h1>{detail.name}</h1>
        <p>{detail.price}</p>
      </div>
      <div className="row">
        {detail.relatedProducts?.map((item, index) => {
          return (
            <div className="col-4 ">
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p>Giá tiền:{item.price}</p>
              <p>Số lượng: {item.quantity}</p>
              <button
                onClick={() => {
                  navigation(`/detail/${item.id}`);
                }}
                className="btn btn-dark"
              >
                Xem Chi TIết
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
