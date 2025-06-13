import { Link } from "react-router-dom";
import BrandImg from "../assets/brandImg.jpg";

export default function BrandStory() {
  return (
    <section
      id="brand-section"
      className="
        py-10 sm:py-14
        max-w-6xl mx-auto
        flex flex-col-reverse md:flex-row items-center
        gap-8 md:gap-12
        px-4
      "
    >
      {/* Text Content */}
      <div className="flex-1 w-full md:w-auto text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Our Passion for Green Living
        </h2>
        <p className="text-gray-500 mb-4 max-w-xl mx-auto md:mx-0">
          At Aadi Seeds, we believe in the power of plants to transform any space. Our mission is to bring you the healthiest, happiest plants and the knowledge to care for them.
        </p>
        <Link to="/about" className="btn-secondary">
          Learn More
        </Link>
      </div>
      {/* Image */}
      <div className="flex-1 flex justify-center items-center w-full md:w-auto">
        <img
          src={BrandImg}
          alt="Our Story"
          className="rounded-lg bg-gray-100 shadow-md w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm h-auto object-cover"
          style={{ aspectRatio: "3/4" }}
        />
      </div>
    </section>
  );
}
