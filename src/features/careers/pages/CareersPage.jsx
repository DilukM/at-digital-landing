import React from "react";
import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

const CareersPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <div className="careers-content min-h-[70vh] flex justify-center items-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Careers</h1>
          <p className="text-lg text-text">
            Join our team and help us build amazing digital solutions.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CareersPage;
