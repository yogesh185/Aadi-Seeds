import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import products from "../utils/products";
import { CartContext } from "../context/CartContext"; // Import CartContext

function getRandomRelated(products, currentId, count = 4) {
  const filtered = products.filter(p => String(p.id) !== String(currentId));
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }
  return filtered.slice(0, count);
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));
  const [quantity, setQuantity] = useState(1);
  const [related, setRelated] = useState([]);
  const { addToCart } = useContext(CartContext); // Get addToCart from context

  useEffect(() => {
    setRelated(getRandomRelated(products, id));
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div className="p-8">Product not found.</div>;

  const features = [
    "High-quality materials",
    "Easy to care for",
    "Perfect for indoor use",
    "Fast shipping available"
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-6">
      {/* Breadcrumb */}
      <div className="bg-white border-b shadow-sm mb-6">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <nav className="text-xs text-gray-600 flex flex-wrap gap-1">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-green-600">Shop</Link>
            <span>/</span>
            <span className="text-gray-800">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Card */}
      <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10 mb-10 flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-md aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        {/* Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span className="text-xs text-gray-500 uppercase">{product.category}</span>
            <h1 className="text-2xl font-bold text-gray-900 mt-1 mb-2">{product.name}</h1>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl font-bold text-green-700">₹{product.price}</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                In Stock
              </span>
            </div>
            <p className="text-gray-700 mb-4">{product.description || "High-quality gardening product perfect for your home or office."}</p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-green-700">Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Quantity and CTA */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-gray-700">Quantity:</span>
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
              >-</button>
              <span className="px-4 py-1 bg-gray-100 rounded text-base font-semibold text-gray-800">{quantity}</span>
              <button
                onClick={() => setQuantity(q => Math.min(10, q + 1))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
                aria-label="Increase quantity"
                disabled={quantity >= 10}
              >+</button>
            </div>
            <button
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition mb-2"
              onClick={() => addToCart(product, quantity)}
            >
              Add to Cart
            </button>
            <button className="w-full border border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-5xl mx-auto px-2">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {related.map((relatedProduct) => (
            <Link
              key={relatedProduct.id}
              to={`/product/${relatedProduct.id}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100 block p-2 sm:p-4"
            >
              <img
                src={relatedProduct.image}
                alt={relatedProduct.name}
                className="w-full h-28 object-cover rounded-t-lg"
              />
              <div className="pt-2">
                <div className="font-semibold text-gray-900 text-sm truncate">{relatedProduct.name}</div>
                <div className="text-xs text-gray-500 truncate">{relatedProduct.category}</div>
                <div className="text-green-700 font-bold mt-1 text-sm">₹{relatedProduct.price}</div>
              </div>
            </Link>
          ))}
        </div>
        <button
          className="mt-6 w-full sm:w-auto bg-white border border-green-600 text-green-700 font-semibold py-2 px-6 rounded-lg shadow-sm hover:bg-green-600 hover:text-white hover:shadow-md transition duration-200 flex items-center justify-center mx-auto"
          onClick={() => setRelated(getRandomRelated(products, id))}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582M20 20v-5h-.581M5 9A7.003 7.003 0 0 1 12 5c1.657 0 3.156.576 4.355 1.535M19 15a7.003 7.003 0 0 1-7 4c-1.657 0-3.156-.576-4.355-1.535" />
          </svg>
          Show More Suggestions
        </button>
      </div>
    </div>
  );
}
