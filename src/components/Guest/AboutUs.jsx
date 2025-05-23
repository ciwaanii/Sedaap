import React from "react";
import { GiButterfly } from "react-icons/gi";

export default function AboutUs() {
  return (
    <section
      className="relative bg-white py-24 px-6 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Decorative background shape */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-100 opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 opacity-30 rounded-full translate-x-1/4 translate-y-1/4"></div>
      
      <div className="relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Tentang Kue-Kue Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Di Sedap Bakery, setiap kue dipanggang dengan cinta, menggunakan bahan terbaik  
            dan resep turun-temurun untuk momen manis Anda.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Gambar dengan frame */}
          <div className="animate-fade-in delay-200 h-full">
            <div className="relative overflow-hidden rounded-xl shadow-lg h-full">
              <img
                src="/images/awadua.jpg"
                alt="Our Cakes"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
            </div>
          </div>

          {/* Text & list */}
          <div className="space-y-6 animate-fade-in delay-400">
            <h3 className="text-3xl font-semibold text-gray-800">
              Kenapa Pilih <span className="text-pink-500">Sedap Bakery?</span>
            </h3>
            <ul className="space-y-4">
              {[
                "Bahan premium & organik",
                "Ragam rasa kreasi chef kami",
                "Selalu dipanggang segar harian",
                "Pemesanan custom untuk acara spesial",
                "Pengiriman cepat & aman",
              ].map((item, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <GiButterfly className="mt-1 text-pink-500 mr-3 text-xl" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease both;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}
