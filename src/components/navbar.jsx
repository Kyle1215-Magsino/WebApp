import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <nav className="fixed w-full z-50">
      {/* Desktop Navbar */}
      {!isMobile && (
        <div className="top-0 left-0 w-full bg-gradient-to-r from-red-600 to-gray-900 text-white shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <h1
              className="text-2xl font-extrabold tracking-wide cursor-pointer"
              onClick={() => navigate("/")}
            >
              Ferrari<span className="text-gray-200">Hub</span>
            </h1>
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
                Listing
              </li>
              <li
                className="hover:text-red-300 cursor-pointer transition"
                onClick={() => navigate("/order")}
              >
                Orders
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navbar (like desktop) */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-red-600 to-gray-900 text-white shadow-lg z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-around px-6 py-3 text-gray-100 font-medium">
            <span
              className="hover:text-red-300 cursor-pointer transition"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <span
              className="hover:text-red-300 cursor-pointer transition"
              onClick={() => navigate("/listing")}
            >
              Listing
            </span>
            <span
              className="hover:text-red-300 cursor-pointer transition"
              onClick={() => navigate("/order")}
            >
              Orders
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
