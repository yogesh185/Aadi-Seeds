import { Link } from "react-router-dom";
import heroImg from "../assets/heroImg1.jpg"; // Use your actual image path

export default function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="
        relative
        min-h-[340px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]
        flex items-center justify-center text-center
      "
    >
      {/* Overlay for faded/dull effect */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/70 transition-colors" aria-hidden="true" />
      <div className="relative z-10 w-full flex flex-col items-center px-4 py-16 sm:py-24">
        <h1 className="
          text-3xl
          sm:text-4xl
          md:text-6xl
          font-bold
          mb-4
          text-white
          drop-shadow-lg
          leading-tight
        ">
          Bring <span className="text-primary-600">Nature</span> Indoors
        </h1>
        <p className="
          text-base
          sm:text-lg
          md:text-2xl
          text-white
          mb-8
          max-w-xl
          mx-auto
        ">
          Enhance your home or office with quality plants, care, and essentials.
        </p>
        <Link
          to="/shop"
          className="
            btn-primary
            animate-glow
            px-6 py-3
            text-base sm:text-lg
            rounded
            shadow-lg
          "
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
