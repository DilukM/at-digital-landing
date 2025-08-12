import React from "react";
import Button from "../../../shared/components/Button";
import bannerImg from "../../../assets/hero-cover.png";


export default function Banner() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background hero image */}
      <img
        src={bannerImg}
        alt="Workspace"
        className="w-full h-auto object-cover"
      />
      <div className="w-full bg-gradient-to-r from-dark2 to-analogous2 p-4 sm:p-6 md:p-8 text-white md:absolute md:bottom-10 md:left-10 md:max-w-xl md:rounded md:shadow-lg">
        {/* Main heading text */}
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        {/* Call to action button */}
        <Button label="GET FREE CONSULTATION" variant="secondary" />
      </div>
    </div>
  );
}
