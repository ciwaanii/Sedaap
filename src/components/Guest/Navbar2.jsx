import React from "react";
import { Link } from "react-router-dom";
import logo from '/images/Logo.png';

export default function Navbar2() {
  return (
    <nav className="bg-[#201F1F] shadow-md w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-12 h-12 object-cover" />
          <span className="text-3xl font-extrabold font-sans-serif text-white">
            SEDAP<span className="text-blue-300">.</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/guest#about-us" className="text-gray-300 hover:text-blue-400 font-sans">
            ABOUT US
          </Link>
          <Link to="/guest#top-products" className="text-gray-300 hover:text-blue-400 font-sans">
            OUR TOP PRODUCT
          </Link>
          <Link to="/guest#testimonials" className="text-gray-300 hover:text-blue-400 font-sans">
            TESTIMONI
          </Link>

        </div>
      </div>
    </nav>
  );
}
