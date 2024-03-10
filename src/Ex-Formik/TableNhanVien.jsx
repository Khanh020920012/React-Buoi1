import React from "react";
import ButtonCuston from "./ButtonCuston";

export default function TableNhanVien({ arrNhanVien,handleDeleteNhanVien }) {
  
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              MSNV
            </th>
            <th scope="col" className="px-6 py-3">
              Họ Tên
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Số Điện Thoại
            </th>
            <th scope="col" className="px-6 py-3">
              Chức Vụ
            </th>
            <th scope="col" className="px-6 py-3">
              Tiền Lương
            </th>
            <th scope="col" className="px-6 py-3">
              Hành Động
            </th>
          </tr>
        </thead>
        <tbody>
          {arrNhanVien.map((nhanVien, index) => {
            let { msnv, hoTen, email, soDienThoai, chucVu, tienLuong } =
              nhanVien;

            return (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4">{msnv}</td>
                <td className="px-6 py-4">{hoTen}</td>
                <td className="px-6 py-4">{email}</td>
                <td className="px-6 py-4">{soDienThoai}</td>
                <td className="px-6 py-4">{chucVu}</td>
                <td className="px-6 py-4">{tienLuong}</td>
                <td className="space-x-5">
                  <ButtonCuston

                    onClick={() => {
                      handleDeleteNhanVien(msnv);
                    }}
                    content="xóa"
                    className="bg-red-700 text-white "
                  />

                  <ButtonCuston
                    content="sửa"
                    className="bg-orange-500 text-white "
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
