import ProductCard from "./ProductCard";
import products from "../utils/products";

export default function FeaturedProducts() {
  return (
    <section className="py-8 sm:py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
        Featured Products
      </h2>
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        "
      >
        {products.slice(0, 8).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
