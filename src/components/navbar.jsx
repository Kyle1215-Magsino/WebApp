import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          ReactCars
        </Link>

        <div className="space-x-8 hidden md:flex">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/listing"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Listing
          </Link>
          <Link
            to="/order"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Order
          </Link>
        </div>

        <Link
          to="/order"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium shadow-md hover:opacity-90 transition"
        >
          Order Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
