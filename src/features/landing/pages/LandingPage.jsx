import React from "react";
import Navbar from "../../../shared/components/Navbar";
import Banner from "../components/Banner";
import FAQItem from "../components/FaqItem";
import Footer from "../../../shared/components/Footer";
import ServiceCard from "../components/ServiceCard";

import webDevImg from "../../../assets/computer.svg";
import strategyImg from "../../../assets/magnifier.svg";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Banner />
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 w-full">
          <ServiceCard
            image={webDevImg}
            title="Web & Mobile App Development"
            description="Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online."
            imageAlt="Web & Mobile App Development"
            imagePosition="left"
          />

          <ServiceCard
            image={strategyImg}
            title="Digital Strategy Consulting"
            description="Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component will
                never work in isolation and every business needs a different mix.
                We provide a clear concept and strategic overview to find the most
                efficient model for your business."
            imageAlt="Digital Strategy Consulting"
            imagePosition="right"
          />
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col items-center bg-gray-50">
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
              answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum 
ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
            />
            <FAQItem
              question="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
              answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum 
ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
            />
            <FAQItem
              question="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?"
              answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum 
ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
