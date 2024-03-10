import React from "react";
import InputCusTon from "./InputCusTon";
import { useFormik } from "formik";
import ButtonCusTom from "./ButtonCusTom";

export default function NhanVienForm({ handleAddNhanVien }) {
  let { handleChange, resetForm, handleSubmit, values } = useFormik({
    initialValues: {
      msnv: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
      chucVu: "",
      tienLuong: "",
    },
    onSubmit: (value) => {
      console.log("🚀 ~ NhanVienForm ~ value:", value);
      handleAddNhanVien(value);
      //   resetForm();
    },
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-5 font-bold"
      >
        <div>
          <InputCusTon
            value={values.msnv}
            id="msnv"
            label="Nhập msnv"
            placeholder="Vui Lòng nhập msnv"
            name="msnv"
            onChange={handleChange}
          />
        </div>
        <div>
          <InputCusTon
            value={values.hoTen}
            id="hoTen"
            label="Họ tên"
            placeholder="Vui Lòng nhập Họ Tên"
            name="hoTen"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2">
          <InputCusTon
            value={values.email}
            id="email"
            label="Email"
            placeholder="Vui Lòng nhập email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <InputCusTon
            value={values.soDienThoai}
            id="soDienThoai"
            label="Số Điện Thoại"
            placeholder="Vui Lòng nhập số điện thoại"
            name="soDienThoai"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="chucVu" className="block mb-2   text-gray-900 ">
            Chức Vụ
          </label>
          <select
            value={values.chucVu}
            onChange={handleChange}
            name="chucVu"
            id="chucVu"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option selected>Chọn Chức Vụ</option>
            <option value="Giám Đốc">Giám Đốc</option>
            <option value="Nhân Viên">Nhân Viên</option>
            <option value="Công Nhân">Trưởng Phòng</option>
            <option value="Lao Công">Lao Công</option>
          </select>
        </div>
        <div className="col-span-2">
          <InputCusTon
            value={values.tienLuong}
            onChange={handleChange}
            name="tienLuong"
            id="tienLuong"
            label="Tiền Lương"
            placeholder="Vui Lòng nhập tiền lương"
          />
        </div>
        <div>
          <ButtonCusTom
            content="Thêm Nhân Viên"
            type="submit"
            className="bg-black"
          />
          <ButtonCusTom
            onClick={resetForm}
            content="Reset"
            type="submit"
            className="bg-red-500   "
          />
          <ButtonCusTom
            content="Sửa Nhân Viên"
            type="submit"
            className="bg-orange-500   "
          />
        </div>
      </form>
    </div>
  );
}
