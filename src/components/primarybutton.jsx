import React from "react";

const PrimaryButton = ({ label, onClick, type = "primary" }) => {
  let styles = "";

  if (type === "primary") {
    styles =
      "bg-red-600 text-white hover:bg-red-700";
  } else if (type === "secondary") {
    styles =
      "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white";
  } else {
    styles =
      "bg-gray-700 text-white hover:bg-gray-800";
  }

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${styles}`}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
