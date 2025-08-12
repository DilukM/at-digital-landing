import React from "react";
import Logo from "../../assets/logo.svg"; // Assuming you have a logo image

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-16 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
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
                <a>ReactJS</a>
              </li>
              <li>
                <a>Gatsby</a>
              </li>
              <li>
                <a>NextJS</a>
              </li>
              <li>
                <a>NodeJS</a>
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
                <a>Social Media Marketing</a>
              </li>
              <li>
                <a>Web & Mobile App Development</a>
              </li>
              <li>
                <a>Data & Analytics</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom with Divider */}
        <div className="border-t-2 border-white pt-6 mx-100">
          <div className="flex justify-center space-x-8 text-white">
            <a href="#" className="hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <span className="text-white">|</span>
            <a href="#" className="hover:text-secondary transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
