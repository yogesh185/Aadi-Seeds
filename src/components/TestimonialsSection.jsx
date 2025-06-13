import { useState, useEffect, useRef } from "react";
import testimonials from "../utils/testimonials";

const AUTO_SLIDE_INTERVAL = 4000;

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const timer = useRef();

  useEffect(() => {
    timer.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearTimeout(timer.current);
  }, [active]);

  return (
    <section className="py-8 sm:py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
        Hear From Our Happy Customers
      </h2>
      <div className="max-w-xl sm:max-w-2xl mx-auto animate-fade-in relative">
        <div className="overflow-hidden">
          <div className="transition-all duration-700" key={active}>
            <div className="
              bg-white
              rounded-lg
              shadow
              p-4 sm:p-6
              text-center
              min-h-[180px]
              flex flex-col items-center justify-center
            ">
              <p className="text-gray-600 italic mb-4 text-base sm:text-lg">
                &ldquo;{testimonials[active].text}&rdquo;
              </p>
              <div className="font-semibold text-primary-600 text-sm sm:text-base">
                {testimonials[active].name}
              </div>
            </div>
          </div>
        </div>
        {/* Carousel dots */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`h-3 w-3 rounded-full border-2 transition-all duration-200
                ${active === idx
                  ? "bg-primary-600 border-primary-600 scale-110"
                  : "bg-white border-gray-300 hover:border-primary-600"
                }`}
              onClick={() => setActive(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
