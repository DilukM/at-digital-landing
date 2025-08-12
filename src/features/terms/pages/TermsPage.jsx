import React from "react";
import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <div className="terms-content min-h-[70vh] px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">
            Terms of Service
          </h1>

          <p className="text-lg text-text">
            In the meantime, please review our terms of service that will apply
            to all future offerings.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;
