export default function ProductCard({ product }) {
  return (
    <div className="card card-hover">
      <img src={product.image} alt={product.name} className="w-full h-38 object-cover rounded-t" />
      <div className="p-4">
        <div className="font-semibold">{product.name}</div>
        <div className="text-sm text-gray-400">{product.category}</div>
        <div className="text-primary-600 font-bold mt-1">₹{product.price}</div>
      </div>
    </div>
  );
}
