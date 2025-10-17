import React from "react";
import Navbar from "../../components/navbar";
import PrimaryButton from "../../components/primarybutton";
import { useNavigate } from "react-router-dom";

const Listing = () => {
  const navigate = useNavigate();

  // Car data (can be fetched later from backend)
  const cars = [
    {
      id: 1,
      title: "AeroX Turbo",
      icon: "🚗",
      description: "A sleek and fast sports car with outstanding aerodynamics.",
      price: 1800000,
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "EcoDrive X",
      icon: "⚡",
      description:
        "An electric car with a 500km range and sustainable performance.",
      price: 2300000,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "RoadMaster 4x4",
      icon: "🛻",
      description:
        "Built for adventure. Powerful 4x4 performance for any terrain.",
      price: 2700000,
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleOrder = (car) => {
    navigate("/order", { state: { car } });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Navbar />

      {/* Page Header */}
      <header className="pt-28 text-center px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Car Listings
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Explore our latest car models and find your perfect match.
        </p>
      </header>

      {/* Car Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-12 lg:px-20 pb-24">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer flex flex-col"
          >
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-56 object-cover rounded-t-3xl"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span>{car.icon}</span> {car.title}
              </h2>
              <p className="text-gray-600 flex-grow">{car.description}</p>
              <p className="text-xl font-semibold text-indigo-600 mt-4">
                ₱{car.price.toLocaleString()}
              </p>
              <div className="mt-6">
                <PrimaryButton
                  label="Order Now"
                  onClick={() => handleOrder(car)}
                  type="primary"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 text-center py-8">
        <p className="text-sm">© 2025 AutoHub Motors. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Listing;
