import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("USD");

  return (
    <nav className="bg-white shadow-md px-8 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Kiri: dropdown bahasa & mata uang */}
        <div className="flex space-x-4 items-center">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-gray-400 hover:text-blue-500 font-sans text-sm bg-transparent appearance-none cursor-pointer focus:outline-none focus:ring-0 min-w-[120px] px-2"
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="id">Bahasa Indonesia</option>
            <option value="es">Español</option>
          </select>

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="text-gray-400 hover:text-blue-500 font-sans text-sm bg-transparent appearance-none cursor-pointer focus:outline-none focus:ring-0 min-w-[120px] px-2"
            aria-label="Select currency"
          >
            <option value="USD">USD ($)</option>
            <option value="IDR">IDR (Rp)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>

        {/* Kanan: Login & Register */}
        <div className="flex space-x-6 items-center">
          <Link
            to="/login"
            className="text-gray-400 hover:text-blue-500 font-sans text-base"
          >
            LOGIN
          </Link>
          <Link
            to="/register"
            className="text-gray-400 hover:text-blue-500 font-sans text-base"
          >
            REGISTER
          </Link>
        </div>
      </div>
    </nav>
  );
}
