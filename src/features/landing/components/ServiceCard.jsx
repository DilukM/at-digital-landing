import React from "react";
import Button from "../../../shared/components/Button";

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="flex items-center gap-6 p-6 bg-accent2 rounded shadow-md">
      <img src={image} alt={title} className="w-32 h-32" />
      <div>
        <h2 className="text-xl font-bold text-primary mb-2">{title}</h2>
        <p className="text-text mb-4">{description}</p>
        <Button label="LEARN MORE" variant="secondary" />
      </div>
    </div>
  );
}
