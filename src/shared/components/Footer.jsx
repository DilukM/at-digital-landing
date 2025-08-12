import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark2 text-white px-8 py-12">
      <div className="text-xl font-bold mb-4">at digital</div>
      <p className="mb-6 max-w-lg text-accent1">
        Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
      </p>
      <div className="flex gap-16">
        <div>
          <h3 className="font-semibold mb-2 text-secondary">Our Technologies</h3>
          <ul className="text-accent1">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-secondary">Our Services</h3>
          <ul className="text-accent1">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-sm text-accent1">
        <a href="#" className="mr-4 underline hover:text-secondary">Privacy Policy</a>
        <a href="#" className="underline hover:text-secondary">Terms & Conditions</a>
      </div>
    </footer>
  );
}