import React from "react";
import PrimaryButton from "./primarybutton";

const Car = ({ icon, title, description, image, price, onOrderClick }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Car Image */}
      {image && (
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 text-3xl">{icon}</div>
        </div>
      )}

      {/* Car Details */}
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price and Button */}
        {price && (
          <div className="flex items-center justify-between mt-auto">
            <span className="text-xl font-semibold text-indigo-600">
              ₱{price.toLocaleString()}
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
