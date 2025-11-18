import React from "react";
import heroBg from "../assets/background.png";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            `url(${heroBg})`,
        }}
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Build Your Dream Burger
        </h1>
        <p className="text-lg font-apricot md:text-2xl mb-8">
          your burger, your way.
        </p>
        <button className="bg-yellow-900 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full transition">
          Start Ordering
        </button>
      </div>

      {/* Floating ingredients (example using images) */}
    
    </section>
  );
};

export default Hero;