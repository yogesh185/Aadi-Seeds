import { createContext, useState, useEffect, useCallback } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem("cartItems");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Add to cart with size and price support
  const addToCart = useCallback((item, quantity = 1) => {
    setCartItems(prev => {
      // Find by id and size (size can be undefined)
      const existingIndex = prev.findIndex(
        cartItem =>
          cartItem.id === item.id &&
          (cartItem.size || "") === (item.size || "")
      );

      if (existingIndex >= 0) {
        // Update quantity if same id and size
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }

      // Add new item (make sure price and size are included)
      return [...prev, { ...item, quantity }];
    });
  }, []);

  // Update item quantity by id and size
  const updateQuantity = useCallback((id, newQuantity, size) => {
    if (newQuantity < 1) return;

    setCartItems(prev =>
      prev.map(item =>
        item.id === id && (item.size || "") === (size || "")
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, []);

  // Remove item by id and size
  const removeItem = useCallback((id, size) => {
    setCartItems(prev =>
      prev.filter(
        item => !(item.id === id && (item.size || "") === (size || ""))
      )
    );
  }, []);

  // Clear all cart items
  const clearCart = useCallback(() => setCartItems([]), []);

  // Get cart total price
  const getCartTotal = useCallback(
    () =>
      cartItems.reduce(
        (total, item) => total + Number(item.price || 0) * item.quantity,
        0
      ),
    [cartItems]
  );

  // Get total quantity for navbar badge
  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        getCartTotal,
        cartQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
