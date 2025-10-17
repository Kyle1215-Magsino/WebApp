import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import PrimaryButton from "../../components/primarybutton";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve car data from navigate state
  const car = location.state?.car;

  // If no car is passed, redirect back to listing
  if (!car) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">No Car Selected</h2>
        <PrimaryButton
          label="Back to Listings"
          onClick={() => navigate("/listing")}
          type="primary"
        />
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your order for ${car.title} has been placed successfully!`);
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Navbar />

      {/* Page Header */}
      <header className="pt-32 text-center px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Order Your {car.title}
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Complete your details below to confirm your order.
        </p>
      </header>

      {/* Car & Order Form Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-16 px-6 md:px-12 lg:px-20 pb-24">
        {/* Car Preview */}
        <div className="bg-white shadow-2xl rounded-3xl p-6 w-full lg:w-1/2 hover:scale-105 transition-transform duration-500">
          <img
            src={car.image}
            alt={car.title}
            className="rounded-2xl shadow-md mb-6 w-full"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span>{car.icon}</span> {car.title}
          </h2>
          <p className="text-gray-600 mb-4">{car.description}</p>
          <p className="text-2xl font-semibold text-indigo-600">
            ₱{car.price.toLocaleString()}
          </p>
        </div>

        {/* Order Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-3xl p-8 w-full lg:w-1/2 space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Order Information
          </h3>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="example@email.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Contact Number
            </label>
            <input
              type="tel"
              required
              placeholder="09XXXXXXXXX"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Preferred Delivery Date
            </label>
            <input
              type="date"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="pt-4">
            <PrimaryButton label="Place Order" type="primary" />
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 text-center py-8">
        <p className="text-sm">© 2025 AutoHub Motors. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Order;
