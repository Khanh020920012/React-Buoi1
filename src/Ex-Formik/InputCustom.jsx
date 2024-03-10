import React from "react";

export default function InputCustom({
  id,
  label,
  placeholder,
  className = "",
  name,
  onChange,
  value,
  onBlur,
  error,
  touched,
}) {
  // id sẽ khác nhau giữa các input

  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        onBlur={onBlur}
        value={value}
        type="text"
        name={name}
        onChange={onChange}
        id={id}
        className={`bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full border-2 p-2.5 ${
          error && touched ? "border-blue-500" : null
        }`}
        placeholder={placeholder}
      />
      {error && touched ? (
        <p className="text-red-500 text-sm">{error}</p>
      ) : null}
    </div>
  );
}
