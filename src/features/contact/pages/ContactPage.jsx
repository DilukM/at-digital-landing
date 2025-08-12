import React from "react";
import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <div className="contact-content min-h-[70vh] flex justify-center items-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-text">
            Get in touch with our team for more information.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
