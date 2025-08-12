import React from "react";
import Button from "../../../shared/components/Button";
import bannerImg from "../../../assets/hero-cover.png";

export default function Banner() {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={bannerImg}
        alt="Workspace"
        className="w-full h-auto object-cover"
      />
      {/* Content div - positioned absolutely for md screens and up, regular block for smaller screens */}
      <div className="w-full bg-gradient-to-r from-dark2 to-analogous2 p-4 sm:p-6 md:p-8 text-white md:absolute md:bottom-10 md:left-10 md:max-w-xl md:rounded md:shadow-lg">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 leading-tight">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <Button label="GET FREE CONSULTATION" variant="secondary" />
      </div>
    </div>
  );
}
