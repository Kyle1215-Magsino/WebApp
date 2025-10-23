import React, { useState, useEffect } from "react";

const ModalPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect mobile vs desktop
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      {/* ✅ Open Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-white font-semibold transition-transform duration-300 hover:scale-105"
      >
        Modal Button
      </button>

      {/* ✅ Background overlay (solid, no blur) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ✅ Animated Panel */}
      <div
        className={`fixed bg-gradient-to-b from-gray-900 to-black text-white z-50 transform transition-all duration-500 ease-in-out shadow-2xl
          ${
            isMobile
              ? `left-0 right-0 h-[50vh] rounded-t-3xl ${
                  isOpen ? "translate-y-0 bottom-0" : "translate-y-full bottom-0"
                }`
              : `top-0 bottom-0 w-72 rounded-l-3xl ${
                  isOpen ? "translate-x-0 right-0" : "translate-x-full right-0"
                }`
          }`}
      >
        {/* ✅ Content inside panel */}
        <div className="p-6 flex flex-col h-full justify-between">
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 text-red-500">
              Ferrari Control Panel
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Explore more about Ferrari cars, technologies, and upcoming
              releases. This panel adapts beautifully between mobile and
              desktop.
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold mt-6 transition-transform duration-300 hover:scale-105"
          >
            Close
          </button>
        </div>
      </div>

      {/* ✅ Optional animation keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
      `}</style>
    </>
  );
};

export default ModalPanel;
