import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  // Determine price display based on sizes
  let priceDisplay;
  if (product.sizes && product.sizes.length > 0) {
    const prices = product.sizes.map(s => s.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    priceDisplay = minPrice === maxPrice
      ? `₹${minPrice}`
      : `₹${minPrice} – ₹${maxPrice}`;
  } else {
    priceDisplay = `₹${product.price}`;
  }

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col h-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-38 object-cover"
        />
        <div className="p-4 flex flex-col flex-1">
          <div className="font-semibold">{product.name}</div>
          <div className="text-sm text-gray-400">{product.category}</div>
          <div className="text-green-600 font-bold mt-1">{priceDisplay}</div>
        </div>
      </div>
    </Link>
  );
}
