import React from "react";
import PrimaryButton from "./primarybutton";

const Car = ({ icon, title, description, image, price, onOrderClick }) => {
  return (
    <div className="group bg-gradient-to-b from-gray-800 to-black rounded-3xl shadow-lg border border-red-900/40 hover:shadow-red-600/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Car Image */}
      {image && (
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 text-3xl text-red-500 drop-shadow-lg">
            {icon}
          </div>
        </div>
      )}

      {/* Car Details */}
      <div className="p-6 flex flex-col justify-between h-full text-gray-200">
        <div>
          <h3 className="text-2xl font-bold text-red-500 mb-2">{title}</h3>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price and Button */}
        {price && (
          <div className="flex items-center justify-between mt-auto">
            <span className="text-lg font-semibold text-red-400">
              {price}
            </span>
            {onOrderClick && (
              <PrimaryButton
                label="Order Now"
                type="primary"
                onClick={onOrderClick}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Car;
