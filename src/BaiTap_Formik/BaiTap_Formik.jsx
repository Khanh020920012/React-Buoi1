import React, { useState } from "react";
import NhanVienForm from "./NhanVienForm";
import NhanVienTable from "./NhanVienTable";

export default function BaiTap_Formik() {
  let [arrNhanVien, setArrNhanVien] = useState([]);
  let handleAddNhanVien = (nhanVien) => {
    let newArrNhanVien = [...arrNhanVien];
    newArrNhanVien.push(nhanVien);
    setArrNhanVien(newArrNhanVien);
  };
  return (
    <div>
      <div className="container mx-auto space-y-10">
        <h1 className="text-4xl text-center font-bold">
          Bài Tập Làm Lại Formik Quản Lý Nhân Viên
        </h1>
        <NhanVienForm handleAddNhanVien={handleAddNhanVien} />
        <NhanVienTable arrNhanVien={arrNhanVien} />
      </div>
    </div>
  );
}
