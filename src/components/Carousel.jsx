import React, { useState, useEffect, useRef } from "react";

export default function Carousel({ images, interval = 4000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Autoplay effect
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex, images.length, interval]);

  // Manual navigation (optional, with minimal dots)
  const goTo = (idx) => setActiveIndex(idx);

  return (
    <div className="relative w-full max-w-xs aspect-[3/4] overflow-hidden rounded-lg shadow">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Slide ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 
            ${idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          draggable={false}
        />
      ))}
      {/* Minimal dots for navigation */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors duration-300
              ${idx === activeIndex ? "bg-green-600" : "bg-gray-300"}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
