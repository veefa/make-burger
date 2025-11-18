import React from "react";
import Hero from "../Hero"; // the Hero section we built
//import special1 from "./pages/special1.jpg";
//import special2 from "./pages/special2.jpg";
//import special3 from "./pages/special3.jpg";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* Our Specials Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our SPECIALS
        </h2>
{/*
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition">
            <img src={special1} alt="Special 1" className="w-full h-64 object-cover"/>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition">
            <img src={special2} alt="Special 2" className="w-full h-64 object-cover"/>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition">
            <img src={special3} alt="Special 3" className="w-full h-64 object-cover"/>
          </div>
        </div>*/}
      </section>

      {/* Review Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Reviews
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="mb-4">"The best burger I ever had! Highly recommend."</p>
            <span className="font-bold">– Alex</span>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="mb-4">"Amazing flavors and fresh ingredients."</p>
            <span className="font-bold">– Maria</span>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <p>&copy; {new Date().getFullYear()} MakeBurger. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;