import React from "react";
import Navbar from "../../components/navbar";
import { useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/primarybutton";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  // Handle form submission
  const handleOrderSubmit = (e) => {
    e.preventDefault();
    navigate("/listing"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-red-900 text-white flex flex-col">
      <Navbar />

      <div className="flex-grow pt-28 px-6 md:px-12 max-w-5xl mx-auto">
        {car ? (
          <>
            <h1 className="text-4xl font-bold text-red-400 mb-8 text-center">
              Order Your {car.name}
            </h1>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <p className="text-gray-300 mb-4">{car.description}</p>
              <p className="text-lg font-semibold text-red-400 mb-6">
                {car.price}
              </p>

              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-xl bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-red-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-xl bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-red-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Delivery Address
                  </label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-2 rounded-xl bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-red-500"
                    placeholder="Enter your address"
                    required
                  ></textarea>
                </div>

                <div className="pt-6">
                  <PrimaryButton label="Place Order" type="submit" />
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-400 pt-40">
            <p className="mb-6 text-lg">
              No car selected. Please go back to the listings page.
            </p>
            <PrimaryButton
              label="Go to Listing Page"
              type="primary"
              onClick={() => navigate("/listing")}
            />
          </div>
        )}
      </div>

      <footer className="bg-gradient-to-r from-gray-900 to-red-800 text-gray-300 text-center py-6 mt-auto">
        <p className="text-sm">© 2025 AutoHub Motors — Ferrari Edition</p>
      </footer>
    </div>
  );
};

export default Order;
