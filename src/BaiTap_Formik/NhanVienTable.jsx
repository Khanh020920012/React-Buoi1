import React from "react";
import ButtonCusTom from "./ButtonCusTom";

export default function NhanVienTable({ arrNhanVien }) {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              msnv
            </th>
            <th scope="col" class="px-6 py-3">
              Họ Tên
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Số Điện Thoại
            </th>
            <th scope="col" class="px-6 py-3">
              Chức Vụ
            </th>
            <th scope="col" class="px-6 py-3">
              Tiền Lương
            </th>
            <th scope="col" class="px-6 py-3">
              Hành Động
            </th>
          </tr>
        </thead>
        <tbody>
          {arrNhanVien.map((nhanVien, index) => {
            let { msnv, hoTen, email, soDienThoai, chucVu, tienLuong } =
              nhanVien;

            return (
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-bold text-lg">{msnv}</td>
                <td className="px-6 py-4 font-bold text-lg">{hoTen}</td>
                <td className="px-6 py-4 font-bold text-lg">{email}</td>
                <td className="px-6 py-4 font-bold text-lg">{soDienThoai}</td>
                <td className="px-6 py-4 font-bold text-lg">{chucVu}</td>
                <td className="px-6 py-4 font-bold text-lg">{tienLuong}</td>
                <td>
                  <ButtonCusTom content="xóa" className="bg-red-400" />
                </td>
              </tr>
            );
          })}
          {/* <tr class="bg-white border-b">
            <th
              scope="row"
              class="px-6 py-4 font-bold font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
