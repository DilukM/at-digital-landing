import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"; // Assuming you have a logo image

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-4 sm:px-16 py-8">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 md:col-span-1 sm:col-span-2">
            <img src={Logo} alt="AT Digital Logo" className="h-10 mb-3" />
            <p className="text-white leading-relaxed max-w-sm">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>

          {/* Our Technologies */}
          <div>
            <h4 className="font-semibold mb-3 text-white text-lg">
              Our Technologies
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#">ReactJS</a>
              </li>
              <li>
                <a href="#">Gatsby</a>
              </li>
              <li>
                <a href="#">NextJS</a>
              </li>
              <li>
                <a href="#">NodeJS</a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold mb-3 text-white text-lg">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#">Social Media Marketing</a>
              </li>
              <li>
                <a href="#">Web & Mobile App Development</a>
              </li>
              <li>
                <a href="#">Data & Analytics</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom with Divider */}

        <hr className="border-t-2 border-white  lg:mx-60 md:mx-40 sm:mx-4 mb-6" />
        <div className="flex justify-center space-x-8 text-white">
          <Link
            to="/privacy"
            className="hover:text-accent1 transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-white">|</span>
          <Link to="/terms" className="hover:text-accent1 transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
