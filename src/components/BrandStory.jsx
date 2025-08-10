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
          Transform Your Spaces with Aadi Seeds
        </h2>
        <p className="text-gray-500 mb-4 max-w-xl mx-auto md:mx-0">
         At Aadi Seeds, we offer customized greening solutions for every environment-from gardens, terraces, and balconies to living rooms, offices, and farmhouses. Our wide range includes both vibrant live plants and elegant, low-maintenance artificial lanters and green panels. Whether you're looking to enhance your home or elevate a commercial space, we bring beauty, freshness, and functionality to every corner. Aadi Seeds - Greening Lives, Beautifully.
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
