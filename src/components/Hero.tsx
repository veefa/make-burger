import React from "react";
import heroBg from "../assets/background.png";
import Text1 from "../assets/text1.svg";
import Text2 from "../assets/text2.svg";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 text-center text-white px-4">
        <img
          src={Text2}
          alt="Your Burger, Your Way"
          className="w-64 md:w-96 mb-8"
          
        />
        <img
          src={Text1}
          alt="Your Burger, Your Way"
          className="w-64 md:w-96 mb-8"
        />
        <button className="bg-yellow-900 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full transition">
          Start Ordering
        </button>
      </div>

      {/* Floating ingredients (example using images) */}
    </section>
  );
};

export default Hero;
