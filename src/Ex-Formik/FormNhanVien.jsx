import React from "react";
import InputCustom from "./InputCustom";
import ButtonCuston from "./ButtonCuston";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function FormNhanVien({ handleAddNhanVien }) {
  let {
    handleChange,
    handleSubmit,
    resetForm,
    values,
    errors,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: {
      // initialValues định nghĩa các thuộc tính lưu trữ các giá trị cho các input , một lưu ý muốn các input thêm dữ liệu vào đúng các thuộc tính có trong initialValues thì cần truyền thuộc tính name của input đúng  tên các thuộc tính muốn lưu trữ
      msnv: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
      chucVu: "",
      tienLuong: "",
    },
    onSubmit: (value, { resetForm }) => {
      console.log("🚀 ~ FormNhanVien ~ value:", value);
      // chạy phương thức thêm nhân viên thêm dữ liệu lên mảng cha
      handleAddNhanVien(value);
      resetForm();
    },
    validationSchema: Yup.object({
      msnv: Yup.string()
        .required("Vui Lòng Không Bỏ Trống")
        .min(4, "Vui lòng nhập tối thiểu 4 ký tự")
        .max(8, "Vui lòng nhập tối đa 8 ký tự"),
      hoTen: Yup.string().required("Vui Lòng Không Bỏ Trống"),
      email: Yup.string()
        .email("Vui Lòng kiểm tra định dạng email")
        .required("Vui Lòng Không Bỏ Trống"),
      soDienThoai: Yup.string()
        .required("Vui Lòng Không Bỏ Trống")
        .matches(
          /^(0[2|3|5|7|8|9])+([0-9]{8,10})$/,
          "Vui lòng nhập đúng số điện thoại"
        ),
      tienLuong: Yup.string().required("Vui lòng không bỏ trống"),
      chucVu: Yup.string().required("Vui lòng không bỏ trống"),
    }),
  });
  console.log(touched);
  //msnv , hoTen,email,soDienThoai,chucVu,tienLuong
  return (
    <div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
        <div>
          <InputCustom
            onBlur={handleBlur}
            placeholder="Vui lòng nhập msnv"
            label="MSNV"
            id="msnv"
            name="msnv"
            onChange={handleChange}
            value={values.msnv}
            error={errors.msnv}
            touched={touched.msnv}
          />
          {/* xủ lý hiện thị lỗi thông qua 2 đối tượng là errors và touched , error hiện lỗi và touched giúp kiểm tra người dùng đã thao tác với input hay chưa */}
        </div>
        <div>
          <InputCustom
            onBlur={handleBlur}
            placeholder="Vui lòng nhập Họ Tên"
            label="Họ Tên"
            id="hoten"
            name="hoTen"
            onChange={handleChange}
            value={values.hoTen}
            error={errors.hoTen}
            touched={touched.hoTen}
          />
        </div>
        <div className="col-span-2">
          <InputCustom
            placeholder="Vui lòng nhập email"
            label="Email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email}
            touched={touched.email}
          />
        </div>
        <div className="col-span-2">
          <InputCustom
            placeholder="Vui lòng nhập số điện thoại"
            label="Số Điện Thoại"
            id="soDienThoai"
            name="soDienThoai"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.soDienThoai}
            error={errors.soDienThoai}
            touched={touched.soDienThoai}
          />
        </div>
        <div>
          <InputCustom
            onBlur={handleBlur}
            placeholder="Vui lòng nhập số tiền lương"
            label="Tiền Lương"
            id="tienLuong"
            name="tienLuong"
            onChange={handleChange}
            value={values.tienLuong}
            error={errors.tienLuong}
            touched={touched.tienLuong}
          />
        </div>
        <div>
          <label
            htmlFor="chucVu"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Chức Vụ
          </label>
          <select
            onBlur={handleBlur}
            id="chucVu"
            name="chucVu"
            value={values.chucVu}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            error={errors.chucVu}
            touched={touched.chucVu}
          >
            <option selected>Chọn chức vụ</option>
            <option value="Giám đốc">Giám đốc</option>
            <option value="Trưởng phòng">Trưởng phòng</option>
            <option value="Công nhân">Công nhân</option>
            <option value="Lao công">Lao công</option>
          </select>
        </div>

        <div className="space-x-5">
          <ButtonCuston
            type="submit"
            className="bg-black"
            content="Thêm Nhân Viên"
          />
          <ButtonCuston
            onClick={() => {
              resetForm();
            }}
            className="bg-purple-500"
            content="Reset"
          />
          <ButtonCuston
            className="bg-orange-500"
            content="Cập nhật nhân viên"
          />
        </div>
      </form>
    </div>
  );
}
