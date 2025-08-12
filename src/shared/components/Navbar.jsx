import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";

export default function Navbar() {
  // State to track if mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Get current location from React Router
  const location = useLocation();

  // Closes the mobile menu
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  // Check the active navigation links
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-primary text-white relative z-10">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" onClick={handleMenuClose}>
          <img src={Logo} alt="at digital" className="h-8" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 text-white text-sm font-medium">
          <li>
            <Link
              to="/services"
              className={`hover:text-accent1 transition-colors ${
                isActive("/services") ? "text-accent1" : ""
              }`}
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-accent1 transition-colors ${
                isActive("/about") ? "text-accent1" : ""
              }`}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-accent1 transition-colors ${
                isActive("/contact") ? "text-accent1" : ""
              }`}
            >
              CONTACT US
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className={`hover:text-accent1 transition-colors ${
                isActive("/careers") ? "text-accent1" : ""
              }`}
            >
              CAREERS
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`sm:hidden z-20 ${
            isMenuOpen ? "text-black" : "text-white"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-white z-10">
          <ul className="px-8 pt-16 space-y-8 text-text text-xl font-medium">
            <li>
              <Link
                to="/services"
                className={`block hover:text-primary transition-colors ${
                  isActive("/services") ? "text-primary" : ""
                }`}
                onClick={handleMenuClose}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block hover:text-primary transition-colors ${
                  isActive("/about") ? "text-primary" : ""
                }`}
                onClick={handleMenuClose}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block hover:text-primary transition-colors ${
                  isActive("/contact") ? "text-primary" : ""
                }`}
                onClick={handleMenuClose}
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className={`block hover:text-primary transition-colors ${
                  isActive("/careers") ? "text-primary" : ""
                }`}
                onClick={handleMenuClose}
              >
                CAREERS
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
