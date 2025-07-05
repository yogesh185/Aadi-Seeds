import { Link } from "react-router-dom";
import BrandImg1 from "../assets/brandImg.jpg";
import BrandImg2 from "../assets/flowerPot.webp";
import Carousel from "./Carousel";

export default function BrandStory() {
  const images = [BrandImg1, BrandImg2];

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
      <div className="flex-1 flex justify-center items-center w-full md:w-auto">
        <Carousel images={images} />
      </div>
    </section>
  );
}
