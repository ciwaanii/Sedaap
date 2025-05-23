import React from "react";
import products from "../data/products.json";

export default function TopProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl text-gray-800 mb-8 font-extrabold uppercase">
          Our Top Product
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex overflow-hidden"
            >
              {/* Gambar di kiri dengan efek hover membesar & timbul */}
              <div className="flex-shrink-0 w-1/2 h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl"
                />
              </div>

              {/* Teks di kanan */}
              <div className="w-1/2 p-6 text-left bg-transparent">
                <h3 className="text-lg font-extrabold text-gray-900 uppercase mb-1">
                  {product.name}
                </h3>
                {product.subtitle && (
                  <p className="text-sm text-gray-600 mb-2">
                    {product.subtitle}
                  </p>
                )}
                <p className="text-teal-400 font-bold">
                  From: ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
