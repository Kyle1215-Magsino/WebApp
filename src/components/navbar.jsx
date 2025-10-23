import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed z-50 w-full bottom-0 md:top-0 md:bottom-auto bg-gradient-to-r from-red-600 to-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* ✅ Logo */}
        <h1
          className="text-2xl font-extrabold tracking-wide cursor-pointer"
          onClick={() => navigate("/")}
        >
          Ferrari<span className="text-gray-200">Hub</span>
        </h1>

        {/* ✅ Navigation Links */}
        <ul className="flex items-center space-x-8 text-gray-100 font-medium">
          <li
            className="hover:text-red-300 cursor-pointer transition"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="hover:text-red-300 cursor-pointer transition"
            onClick={() => navigate("/listing")}
          >
            Cars
          </li>
          <li
            className="hover:text-red-300 cursor-pointer transition"
            onClick={() => navigate("/order")}
          >
            Order
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
