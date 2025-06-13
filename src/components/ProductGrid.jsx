import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
