import React from "react";
import Navbar from "../../../shared/components/Navbar";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";
import FAQItem from "../components/FaqItem";
import Footer from "../../../shared/components/Footer";

import webDevImg from "../../../assets/hero-cover.png";
import strategyImg from "../../../assets/magnifier.svg";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Banner />
      <section className="px-8 py-12 bg-accent1">
        <ServiceCard
          title="Web & Mobile App Development"
          description="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
          image={webDevImg}
        />
        <ServiceCard
          title="Digital Strategy Consulting"
          description="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
          image={strategyImg}
        />
      </section>
      <section className="px-8 py-12 bg-accent2">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Frequently Asked Questions
        </h2>
        <FAQItem
          question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
          answer="Placeholder answer text for the first question."
        />
        <FAQItem
          question="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
          answer="Placeholder answer text for the second question."
        />
        <FAQItem
          question="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?"
          answer="Placeholder answer text for the third question."
        />
      </section>
      <Footer />
    </>
  );
}
