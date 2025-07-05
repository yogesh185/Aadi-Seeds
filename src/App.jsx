import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import ScrollToTop from "./components/ScrollToTop"; 
import { CartProvider } from "./context/CartContext";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
    <CartProvider>
      <ScrollToTop /> {/* <-- add here! */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </CartProvider>
    </div>
  );
}
