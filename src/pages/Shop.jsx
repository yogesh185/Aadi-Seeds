import { useState, useEffect } from "react";
import ShopFilters from "../components/ShopFilters";
import ProductGrid from "../components/ProductGrid";
import NewsletterSignup from "../components/NewsletterSignup";
import products from "../utils/products";
import ShopImg from "../assets/shopImg.jpg";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function Shop() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [page, setPage] = useState(1);

  const PRODUCTS_PER_PAGE = 20;

  const filtered = products.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setPage(1);
  }, [search, cat]);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filtered.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${ShopImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        className="relative min-h-[340px] md:min-h-[420px] flex flex-col items-center justify-center text-center"
      >
        <div className="relative z-10 py-10 w-full flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-lg">
            Find Your Perfect Plant
          </h1>
          <button className="btn-primary mb-4">Browse All</button>
        </div>
      </section>
      <ShopFilters search={search} setSearch={setSearch} categories={categories} cat={cat} setCat={setCat} />
      <ProductGrid products={paginatedProducts} />
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 my-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded ${
                page === i + 1
                  ? "bg-green-600 text-white font-bold"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
      <NewsletterSignup />
    </>
  );
}
