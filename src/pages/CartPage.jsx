import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { 
    cartItems, 
    updateQuantity, 
    removeItem, 
    getCartTotal,
    cartQuantity
  } = useContext(CartContext);

  if (cartQuantity === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link 
          to="/shop" 
          className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart ({cartQuantity} items)</h1>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {cartItems.map(item => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center p-4 border-b gap-4">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-20 h-20 object-cover rounded" 
            />
            
            <div className="flex-1 text-center sm:text-left">
              <Link to={`/product/${item.id}`} className="font-semibold hover:text-green-700">
                {item.name}
              </Link>
              <p className="text-green-700 font-bold mt-1">₹{item.price} each</p>
            </div>
            
            <div className="flex items-center">
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-3 py-1 bg-gray-200 rounded-l"
                disabled={item.quantity <= 1}
              >-</button>
              <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-3 py-1 bg-gray-200 rounded-r"
              >+</button>
            </div>
            
            <div className="font-semibold min-w-[80px] text-center">
              ₹{(item.price * item.quantity).toFixed(2)}
            </div>
            
            <button 
              onClick={() => removeItem(item.id)}
              className="text-red-600 hover:text-red-800 p-2"
              aria-label="Remove item"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        ))}
        
        <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-t">
          <div className="text-xl font-bold">
            Total: <span className="text-green-700">₹{getCartTotal().toFixed(2)}</span>
          </div>
          <div className="flex gap-3">
            <Link 
              to="/shop" 
              className="bg-gray-200 text-gray-700 py-2 px-6 rounded hover:bg-gray-300 transition"
            >
              Continue Shopping
            </Link>
            <button className="bg-green-600 text-white py-2 px-6 rounded font-semibold hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
