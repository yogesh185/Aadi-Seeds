import { Link } from "react-router-dom";

export default function CollectionCard({ collection }) {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(collection.name)}`}
      className="card card-hover flex flex-col items-center p-4 transition-transform duration-300 hover:scale-[1.02] hover:shadow-md rounded-lg"
    >
      <div className="w-full overflow-hidden rounded-md">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-32 sm:h-36 md:h-40 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="font-medium text-center mt-2 text-base sm:text-lg">
        {collection.name}
      </div>
    </Link>
  );
}
