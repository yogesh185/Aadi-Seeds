import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartQuantity } = useContext(CartContext);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-4 relative">
        {/* Left: Hamburger (mobile only), Brand */}
        <div className="flex items-center">
          <button
            className="md:hidden mr-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-600 group"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className="w-7 h-7 relative flex flex-col justify-center items-center">
              <span
                className={`block absolute h-0.5 w-7 bg-primary-600 transform transition duration-300 ease-in-out ${
                  menuOpen ? "rotate-45 top-3.5" : "top-2"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-7 bg-primary-600 transform transition-all duration-300 ease-in-out ${
                  menuOpen ? "opacity-0" : "top-3.5"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-7 bg-primary-600 transform transition duration-300 ease-in-out ${
                  menuOpen ? "-rotate-45 top-3.5" : "top-5"
                }`}
              ></span>
            </div>
          </button>
          <Link to="/" className="font-bold text-lg text-primary-600 tracking-wide">
            AADI Seeds
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 text-sm font-medium text-gray-700">
            <li>
              <Link to="/" className="hover:text-primary-600">
                Home
              </Link>
            </li>
            <li>
              <HashLink
                smooth
                to="/#brand-section"
                className="hover:text-primary-600"
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contact-section"
                className="hover:text-primary-600"
              >
                Contact
              </HashLink>
            </li>
            <li>
              <Link to="/shop" className="hover:text-primary-600">
                Shop
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Login/Signup + Cart Icon */}
        <div className="flex items-center space-x-4">
          {/* Desktop only: Login/Signup */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 px-3 py-1 rounded transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 px-3 py-1 rounded transition"
            >
              Signup
            </Link>
          </div>
          {/* Cart Icon */}
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 transition" aria-label="Cart">
            <svg
              className="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 6h15l-1.5 9h-13z" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
            </svg>
            {cartQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartQuantity}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 top-full w-full bg-white shadow-lg border-b border-gray-200 transition-all duration-300 z-40 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 py-4 text-sm font-medium text-gray-700">
            <li>
              <Link
                to="/"
                className="hover:text-primary-600"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <HashLink
                smooth
                to="/#brand-section"
                className="hover:text-primary-600"
                onClick={handleLinkClick}
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contact-section"
                className="hover:text-primary-600"
                onClick={handleLinkClick}
              >
                Contact
              </HashLink>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-primary-600"
                onClick={handleLinkClick}
              >
                Shop
              </Link>
            </li>
            {/* Mobile only: Login (styled in green, bold) */}
            <li>
              <Link
                to="/login"
                className="text-primary-600 font-semibold hover:underline"
                onClick={handleLinkClick}
              >
                Login
              </Link>
            </li>
            {/* No Signup or Cart in mobile menu */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
