import React, { useState } from "react";
import FormNhanVien from "./FormNhanVien";
import TableNhanVien from "./TableNhanVien";

export default function QuanLiNhanVien() {
  let [arrNhanVien, setArrNhanVien] = useState([]);
  console.log("🚀 ~ QuanLiNhanVien ~ arrNhanVien:", arrNhanVien);

  // thêm nhân viên
  let handleAddNhanVien = (nhanvien) => {
    let newArrNhanVien = [...arrNhanVien];
    newArrNhanVien.push(nhanvien);
    setArrNhanVien(newArrNhanVien);
  };
  let handleDeleteNhanVien = (msnv) => {
    let newArrNhanVien = arrNhanVien.filter((nhanVien, index) => {
      return nhanVien.msnv !== msnv;
    });
    setArrNhanVien(newArrNhanVien);
  };
  return (
    <div>
      <div className="container mx-auto space-y-10">
        <h1 className="text-3xl font-bold text-center">
          Bài Tập Quản Lí Nhân Viên Formik - Yup
        </h1>
        {/* form */}
        <FormNhanVien handleAddNhanVien={handleAddNhanVien} />
        {/* table */}
        <TableNhanVien
          arrNhanVien={arrNhanVien}
          handleDeleteNhanVien={handleDeleteNhanVien}
        />
      </div>
    </div>
  );
}
