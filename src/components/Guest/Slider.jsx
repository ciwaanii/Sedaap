import React, { useState, useEffect, useRef } from "react";

const logos = [
  "/images/grab.png",
  "/images/gojek.png",
  "/images/shopee.png",
  "/images/bri.png",
  "/images/mandiri.png",
  "/images/tokopedia.png",
  "/images/bca.webp",
  "/images/bni.png",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;

  // Lebar satu logo + margin horizontal (sesuaikan dengan CSS)
  const logoWidth = 128 + 32; // 128px width + 16px margin kiri dan kanan

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === logos.length - visibleCount ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [visibleCount]);

  return (
    <div
      className="overflow-hidden bg-white px-8 max-w-5xl mx-auto"
      style={{
        borderTop: "2px dashed gray",
        borderBottom: "2px dashed gray",
      }}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * logoWidth}px)`,
        }}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-32 w-32 object-contain mx-4 flex-shrink-0"
            style={{ minWidth: 128 }}
          />
        ))}
      </div>
    </div>
  );
}
