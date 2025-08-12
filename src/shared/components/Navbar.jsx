import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white flex justify-between items-center px-8 py-4">
      <div className="text-xl font-bold">at digital</div>
      <ul className="flex gap-6 text-accent1">
        <li className="hover:text-secondary cursor-pointer">Services</li>
        <li className="hover:text-secondary cursor-pointer">About Us</li>
        <li className="hover:text-secondary cursor-pointer">Contact Us</li>
        <li className="hover:text-secondary cursor-pointer">Careers</li>
      </ul>
    </nav>
  );
}