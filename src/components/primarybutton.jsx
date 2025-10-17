import React from "react";

const PrimaryButton = ({ label, onClick, type = "primary" }) => {
  const base =
    "px-6 py-3 font-semibold rounded-full shadow-md transition-transform duration-300 hover:scale-105";
  const styles =
    type === "primary"
      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
      : "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {label}
    </button>
  );
};

export default PrimaryButton;
