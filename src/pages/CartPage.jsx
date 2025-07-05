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

  // --- Empty Cart State ---
  if (cartQuantity === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex flex-col items-center justify-center flex-grow">
          <div className="max-w-4xl text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
            <Link 
              to="/shop" 
              className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // --- Cart With Items ---
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Shopping Cart ({cartQuantity} items)</h1>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {cartItems.map(item => (
              <div 
                key={item.id + (item.size ? `-${item.size}` : "")}
                className="
                  flex items-center gap-3 p-3 border-b hover:bg-gray-50 transition
                  sm:flex-row sm:gap-4 sm:p-4
                "
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded shadow flex-shrink-0"
                />
                {/* Info & Actions */}
                <div className="flex-1 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <Link to={`/product/${item.id}`} className="font-semibold text-sm hover:text-green-700 truncate max-w-[130px]">
                      {item.name}
                    </Link>
                    <button 
                      onClick={() => removeItem(item.id, item.size)}
                      className="text-red-600 hover:text-red-800 p-1"
                      aria-label="Remove item"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  {item.size && (
                    <div className="text-xs text-gray-500">Size: <span className="font-medium">{item.size}</span></div>
                  )}
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-green-700 font-bold text-sm">
                      ₹{Number(item.price || 0).toFixed(2)}
                    </span>
                    <div className="flex items-center">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                        className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300 disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >-</button>
                      <span className="px-2 py-1 bg-gray-100 text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                        className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                      >+</button>
                    </div>
                    <span className="font-semibold text-xs min-w-[56px] text-right">
                      ₹{(Number(item.price || 0) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-t bg-gray-50">
              <div>
                <div className="text-xl font-bold">
                  Total: <span className="text-green-700">₹{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="text-xs text-gray-600 mt-2 flex flex-col sm:flex-row gap-2">
                  <span className="inline-flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Free Delivery
                  </span>
                  <span className="inline-flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-4-4v8" />
                    </svg>
                    GST Included
                  </span>
                </div>
              </div>
              <div className="flex gap-3 flex-col sm:flex-row w-full sm:w-auto">
                <Link 
                  to="/shop" 
                  className="bg-gray-200 text-gray-700 py-2 px-6 rounded hover:bg-gray-300 transition text-center"
                >
                  Continue Shopping
                </Link>
                <button className="bg-green-600 text-white py-2 px-6 rounded font-semibold hover:bg-green-700 transition text-center">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
