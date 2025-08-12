import React from "react";
import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <div className="services-content min-h-[70vh] flex justify-center items-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Services</h1>
          <p className="text-lg text-text">
            Our comprehensive digital services are coming soon.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
