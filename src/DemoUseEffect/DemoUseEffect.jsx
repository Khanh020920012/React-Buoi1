import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const DemoUseEffect = () => {
  let [product, setProduct] = useState([]);
  // yêu cầu thực hiện tạo state tên product và set giá trị mảng được trả về từ backend vào bên trong state đó
  let navigation = useNavigate();
  // useNavigatelà hook từ react-router-dom giúp chuyển hướng trang sang một conponent mới
  let getAllProduct = async () => {
    let res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    setProduct(res.data.content);
  };
  //
  useEffect(() => {
    console.log("Tôi là didmount phiên bản hook", getAllProduct());
  }, []);
  return (
    <div>
      <div className="row">
        {product.map((item, index) => {
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
};

export default DemoUseEffect;
