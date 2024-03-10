import React from "react";

export default function InputCusTon({
  id,
  label,
  placeholder,
  className = "",
  name,
  onChange,
  value,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      ></label>
      {label}
      <input
        value={value}
        onChange={onChange}
        name={name}
        type="text"
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
       
      />
    </div>
  );
}
