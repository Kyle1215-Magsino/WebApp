import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import PrimaryButton from "../../components/primarybutton";
import CarCard from "../../components/car";

const LandingPage = () => {
  const navigate = useNavigate();

  // Navigation functions
  const handleExplore = () => {
    navigate("/listing");
  };

  const handleOrder = () => {
    navigate("/order");
  };

  // Example car data (can be replaced later with API or DB)
  const cars = [
    {
      id: 1,
      name: "Tesla Model S",
      image:
        "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      price: "$89,990",
      description: "Electric performance sedan with unmatched range and luxury.",
    },
    {
      id: 2,
      name: "BMW M4",
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      price: "$77,695",
      description:
        "A perfect mix of sportiness, power, and everyday comfort.",
    },
    {
      id: 3,
      name: "Audi Q7",
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      price: "$59,200",
      description: "Luxury family SUV with advanced technology and space.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 pb-24 gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Find Your{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Dream Car
            </span>{" "}
            Today
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Discover the perfect car that matches your lifestyle. From sporty
            coupes to family SUVs, explore our premium collection of modern and
            reliable vehicles built for performance and comfort.
          </p>

          <div className="flex flex-wrap gap-4">
            <PrimaryButton
              label="Explore Cars →"
              onClick={handleExplore}
              type="secondary"
            />
            <PrimaryButton
              label="Order Now →"
              onClick={handleOrder}
              type="primary"
            />
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
            alt="Luxury car"
            className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Cars
            </h3>
            <p className="text-gray-600 text-lg">
              Discover our most popular vehicles handpicked for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <CarCard
                key={car.id}
                image={car.image}
                name={car.name}
                price={car.price}
                description={car.description}
                onClick={handleExplore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white text-center py-20 px-6 md:px-12">
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Hit the Road?
        </h3>
        <p className="mb-10 text-lg text-indigo-100">
          Explore our latest car models and make your next journey unforgettable.
        </p>
        <PrimaryButton
          label="Explore Cars"
          onClick={handleExplore}
          type="secondary"
        />
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 text-center py-8">
        <p className="text-sm">© 2025 AutoHub Motors. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
