import React from "react";
import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <div className="privacy-content min-h-[70vh] px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">
            Privacy Policy
          </h1>
          <p className="text-lg text-text">
            In the meantime, we are committed to protecting your privacy and
            ensuring the security of your personal information.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
