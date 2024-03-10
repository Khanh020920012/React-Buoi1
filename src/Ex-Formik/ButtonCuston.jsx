import React from "react";

export default function ButtonCuston({
  className,
  content,
  type = "button",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`py-2 px-5 rounded bg-black text-white ml-2 ${className}`}
    >
      {content}
    </button>
  );
}
