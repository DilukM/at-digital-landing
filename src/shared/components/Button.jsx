import React from "react";

export default function Button({ label, onClick, variant = "primary" }) {
  const base =
    "px-4 py-2 rounded font-semibold text-sm sm:text-base whitespace-nowrap";
  const styles = {
    primary:
      "bg-primary text-white hover:scale-105 transition-transform duration-200 ease-in-out",
    secondary:
      "bg-secondary text-white hover:scale-105 transition-transform duration-200 ease-in-out",
  };

  return (
    <button className={`${base} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
}
