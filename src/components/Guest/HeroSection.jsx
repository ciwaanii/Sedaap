import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./ButtonEffect.css"; // ANIMASI AIR BIRU

export default function HeroSection() {
  const images = [
    "/images/photo1.png",
    "/images/photo2.png",
    "/images/photo3.png",
  ];

  return (
    <section
      className="relative bg-cover bg-center min-h-[90vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/images/awapunya.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#1f1f1f] opacity-30"></div>

      <div className="relative z-10 flex w-full px-10 max-w-7xl gap-12 items-center">
        {/* Kiri: teks */}
        <div className="w-1/2 text-left text-white slide-down-fast space-y-4">
          <p className="text-sm uppercase tracking-widest font-semibold text-black mb-2">
            New Arrivals
          </p>
          <h1 className="text-6xl text-[#1f1f1f] font-extrabold leading-tight">
            NEW TASTE
          </h1>
          <h2 className="text-6xl text-[#437c8a] font-bold mb-2 leading-tight">
            FOR FOOD
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-md font-kaligrafi italic">
            Nikmati cita rasa terbaik dengan bahan pilihan yang segar dan berkualitas.
          </p>
          <button className="fancy-button text-base px-6 py-3">
            <Link to="/guest#cek-stok-produk" className="font-poppins">
              Cek Stok
            </Link>
          </button>
        </div>

        {/* Kanan: Carousel di tengah */}
        <div className="w-1/2 flex justify-center items-center">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            className="w-[400px] h-[400px]"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="object-cover w-full h-full rounded-xl shadow-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
