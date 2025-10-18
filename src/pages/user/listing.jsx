import React, { useState } from "react";
import Navbar from "../../components/navbar";
import PrimaryButton from "../../components/primarybutton";
import { useNavigate } from "react-router-dom";

// ✅ Import Ferrari images from assets
import f8 from "../../assets/cars/f8.jpg";
import sf90 from "../../assets/cars/sf90.jpg";
import roma from "../../assets/cars/roma.jpg";
import ferrari812 from "../../assets/cars/812.jpg";
import portofino from "../../assets/cars/portofino.jpg";
import laferrari from "../../assets/cars/laferrari.jpg";

const Listing = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // ✅ Ferrari Cars Array
  const cars = [
    {
      id: 1,
      name: "Ferrari LaFerrari",
      price: "₱72,000,000",
      image: laferrari,
      description:
        "A hybrid hypercar with a V12 engine and electric motor — Ferrari’s ultimate expression of performance and innovation.",
    },
    {
      id: 2,
      name: "Ferrari SF90 Stradale",
      price: "₱38,000,000",
      image: sf90,
      description:
        "Ferrari’s first hybrid supercar delivering 986 horsepower with breathtaking precision.",
    },
    {
      id: 3,
      name: "Ferrari F8 Tributo",
      price: "₱26,000,000",
      image: f8,
      description:
        "A 710-horsepower V8 masterpiece with advanced aerodynamics and bold design.",
    },
    {
      id: 4,
      name: "Ferrari Roma",
      price: "₱22,000,000",
      image: roma,
      description:
        "Modern luxury with classic Ferrari elegance and twin-turbo V8 power.",
    },
    {
      id: 5,
      name: "Ferrari 812 Superfast",
      price: "₱36,000,000",
      image: ferrari812,
      description:
        "A V12 legend — unmatched performance, sophistication, and thrill in every rev.",
    },
    {
      id: 6,
      name: "Ferrari Portofino M",
      price: "₱20,000,000",
      image: portofino,
      description:
        "The grand tourer that blends open-air luxury with heart-racing performance.",
    },
  ];

  // ✅ Handle order navigation
  const handleOrder = (car) => {
    navigate("/order", { state: { car } });
  };

  // ✅ Search filter
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-950 via-black to-red-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-24 w-full">
        <h1 className="text-5xl font-extrabold text-center text-red-400 mb-6">
          Ferrari Collection
        </h1>
        <p className="text-center text-gray-400 mb-10">
          Discover our exclusive lineup of Ferrari supercars. Precision. Power. Perfection.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Ferrari models..."
            className="w-full sm:w-1/2 px-5 py-3 rounded-full bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          />
        </div>

        {/* Car Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl hover:shadow-red-800/40 hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-60 object-cover rounded-2xl mb-4"
                />
                <h2 className="text-2xl font-bold text-red-400 mb-2">
                  {car.name}
                </h2>
                <p className="text-gray-300 mb-4">{car.description}</p>
                <p className="text-lg font-semibold text-gray-100 mb-6">
                  {car.price}
                </p>

                <PrimaryButton
                  label="Order Now"
                  type="primary"
                  onClick={() => handleOrder(car)}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg mt-16">
            No Ferrari models found matching{" "}
            <span className="text-red-400 font-semibold">"{search}"</span>.
          </p>
        )}
      </main>

      {/* Footer stays pinned down */}
      <footer className="mt-auto bg-gradient-to-r from-gray-900 to-red-800 text-gray-300 text-center py-8">
        <p className="text-sm">© 2025 AutoHub Motors — Ferrari Edition</p>
      </footer>
    </div>
  );
};

export default Listing;
