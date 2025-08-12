import React from "react";
import Logo from "../../assets/logo.svg"; // Assuming you have a logo image

export default function Navbar() {
  return (
    <nav className="bg-primary text-white flex justify-between items-center px-8 py-4">
      <img src={Logo} alt="Logo" className="h-8" />
      <ul className="flex gap-6 text-accent1">
        <li className="hover:text-secondary cursor-pointer">Services</li>
        <li className="hover:text-secondary cursor-pointer">About Us</li>
        <li className="hover:text-secondary cursor-pointer">Contact Us</li>
        <li className="hover:text-secondary cursor-pointer">Careers</li>
      </ul>
    </nav>
  );
}
