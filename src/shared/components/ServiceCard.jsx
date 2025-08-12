import React from "react";
import Button from "./Button";

export default function ServiceCard({
  image,
  title,
  description,
  imageAlt,
  imagePosition = "left",
}) {
  return (
    <div className="flex items-center gap-6 p-6 w-4/5">
      {imagePosition === "left" && (
        <img src={image} alt={imageAlt} className="w-100 h-100 mr-10" />
      )}
      <div>
        <h2 className="mb-2">{title}</h2>
        <p className="text-text mb-4">{description}</p>
        <Button label="LEARN MORE" variant="secondary" />
      </div>
      {imagePosition === "right" && (
        <img src={image} alt={imageAlt} className="w-100 h-100 ml-10" />
      )}
    </div>
  );
}
