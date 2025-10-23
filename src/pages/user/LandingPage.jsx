import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import PrimaryButton from "../../components/primarybutton";
import CarCard from "../../components/car";
import ModalPanel from "../../components/ModalPanel";

import laferrari from "../../assets/cars/laferrari.jpg";
import portofino from "../../assets/cars/portofino.jpg";
import roma from "../../assets/cars/roma.jpg";
import ferrari812 from "../../assets/cars/812.jpg";
import sf90 from "../../assets/cars/sf90.jpg";
import f8 from "../../assets/cars/f8.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleExplore = () => navigate("/listing");
  const handleOrder = () => navigate("/listing");

  const cars = [
    {
      id: 1,
      name: "Ferrari LaFerrari",
      image: laferrari,
      price: "₱72,000,000",
      description:
        "The ultimate expression of Ferrari’s engineering — a hybrid hypercar with 950 horsepower.",
    },
    {
      id: 2,
      name: "Ferrari SF90 Stradale",
      image: sf90,
      price: "₱38,000,000",
      description:
        "Ferrari’s first plug-in hybrid supercar delivering electrifying 986 horsepower.",
    },
    {
      id: 3,
      name: "Ferrari F8 Tributo",
      image: f8,
      price: "₱26,000,000",
      description:
        "A 710-horsepower V8 masterpiece — pure Ferrari performance and precision.",
    },
    {
      id: 4,
      name: "Ferrari Roma",
      image: roma,
      price: "₱22,000,000",
      description:
        "Modern luxury meets classic elegance — a grand tourer for every occasion.",
    },
    {
      id: 5,
      name: "Ferrari Portofino M",
      image: portofino,
      price: "₱20,000,000",
      description:
        "An open-top masterpiece that blends comfort, speed, and timeless style.",
    },
    {
      id: 6,
      name: "Ferrari 812 Superfast",
      image: ferrari812,
      price: "₱36,000,000",
      description:
        "The ultimate V12 grand tourer with unmatched acceleration and control.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen text-white flex flex-col relative">
      {/* ✅ Navbar — top on desktop, bottom on mobile */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="flex-1 pt-28 md:pt-40 pb-24 md:pb-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl md:text-6xl font-extrabold text-red-600 mb-6 leading-tight">
              Experience the Power of <span className="text-white">Ferrari</span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Discover the perfect combination of design, speed, and Italian
              craftsmanship. Explore our full Ferrari lineup today.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <PrimaryButton
                label="Explore Cars →"
                onClick={handleExplore}
                type="primary"
              />
              <PrimaryButton
                label="Order Now →"
                onClick={handleOrder}
                type="secondary"
              />
            </div>

            {/* ✅ Modal Button stays in hero section */}
            <div className="mt-4">
              <ModalPanel />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src={laferrari}
              alt="Ferrari Hero"
              className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* Ferrari Collection */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="px-6 md:px-12 lg:px-20 xl:px-32">
            <div className="text-center mb-16">
              <h3 className="text-5xl font-bold text-red-600 mb-4">
                Ferrari Collection
              </h3>
              <p className="text-gray-400 text-lg">
                Discover our most powerful, luxurious, and breathtaking models.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car) => (
                <div
                  key={car.id}
                  className="bg-gradient-to-b from-gray-800 to-black rounded-3xl p-6 shadow-lg hover:shadow-red-600/40 hover:-translate-y-2 transform transition-all duration-500"
                >
                  <CarCard
                    image={car.image}
                    name={car.name}
                    price={car.price}
                    description={car.description}
                    onClick={handleExplore}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-gray-900 to-red-800 text-gray-300 text-center py-8">
        <p className="text-sm">© 2025 AutoHub Motors — Ferrari Edition.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
