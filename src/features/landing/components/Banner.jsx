import React from "react";
import Button from "../../../shared/components/Button";
import bannerImg from "../../../assets/hero-cover.png";

export default function Banner() {
  return (
    <div className="relative">
      <img src={bannerImg} alt="Workspace" className="w-full h-auto" />
      <div className="absolute bottom-0 left-0 w-full md:w-auto md:bottom-10 md:left-10 md:max-w-xl p-8 rounded text-white shadow-lg bg-linear-65 from-dark2 to-analogous2">
        <h1 className="text-2xl font-bold mb-4">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <Button label="GET FREE CONSULTATION" variant="secondary" />
      </div>
    </div>
  );
}
