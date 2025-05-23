import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  // Fungsi scroll ke atas dengan animasi smooth
const scrollToTop = () => {
  console.log("Scroll to top clicked");
  window.scrollTo(0, 0);
};


  return (
    <div className="relative">
      {/* Tombol panah scroll ke atas */}
      <button
      
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          absolute -top-8 left-1/2 transform -translate-x-1/2
          bg-blue-600 hover:bg-blue-700 text-white
          p-3 rounded-full shadow-lg
          animate-bounce
          transition duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-400
          z-50
          cursor-pointer
        "
        type="button"
      >
        <Link to="/guest#hero-section">
            <FaArrowUp size={20} />
      </Link>
        
      </button>

      {/* Footer utama dengan background gambar */}
      <footer
        className="bg-cover bg-center text-white py-16 px-6"
        style={{ backgroundImage: "url('/images/bg-footer.jpg')" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Kontak */}
          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)", // transparan blur
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <h3 className="text-xl font-bold mb-4">Info Kontak</h3>
            <p className="text-sm mb-2">234 Heaven Street, Beverly Hill.</p>
            <p className="text-sm mb-2">(800) 123 456 789</p>
            <p className="text-sm">Contact@erentheme.com</p>
          </div>

          {/* Gambar Partner */}
          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <h3 className="text-xl font-bold mb-4 text-center">Gambar Partner</h3>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <img
                src="/images/gojek.png"
                alt="Partner Logo 1"
                className="h-30 object-contain"
              />
              <img
                src="/images/grab.png"
                alt="Partner Logo 2"
                className="h-8 object-contain"
              />
              <img
                src="/images/shopee.png"
                alt="Partner Logo 3"
                className="h-25 object-contain"
              />
              <img
                src="/images/mandiri.png"
                alt="Partner Logo 4"
                className="h-7 object-contain"
              />
              <img
                src="/images/bri.png"
                alt="Partner Logo 5"
                className="h-7 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Copyright di bawah */}
        <div className="mt-12 text-center text-sm text-white/70">
          &copy; {new Date().getFullYear()} Sedap Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
