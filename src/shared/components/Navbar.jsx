import React, { useState } from "react";
import Logo from "../../assets/logo.svg"; // Assuming you have a logo image

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-white">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <img src={Logo} alt="at digital" className="h-8" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-accent1 text-sm font-medium">
          <li>
            <a href="#" className="hover:text-white transition-colors">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              CONTACT US
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              CAREERS
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-analogous1">
          <ul className="px-4 py-4 space-y-4 text-accent1 text-sm font-medium">
            <li>
              <a href="#" className="block hover:text-white transition-colors">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-white transition-colors">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-white transition-colors">
                CONTACT US
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-white transition-colors">
                CAREERS
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
