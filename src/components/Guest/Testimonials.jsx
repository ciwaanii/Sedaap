import React from "react";
import testimonials from "../data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 font-poppins">
          Testimoni
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="
                bg-transparent
                border-2 border-dotted border-gray-700
                p-6 rounded-xl
                backdrop-blur-sm
                transition-shadow
                hover:shadow-lg
              "
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 italic">"{item.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
