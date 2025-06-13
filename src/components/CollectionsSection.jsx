import CollectionCard from "./CollectionCard";
import collections from "../utils/collections";

export default function CollectionsSection() {
  return (
    <section className="py-8 sm:py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
        Explore Our Collections
      </h2>
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        gap-6
      ">
        {collections.map((c) => (
          <CollectionCard key={c.id} collection={c} />
        ))}
      </div>
    </section>
  );
}
