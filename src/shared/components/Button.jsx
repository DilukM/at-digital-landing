import React from "react";

export default function Button({ label, onClick, variant = "primary" }) {
  const base = "px-4 py-2 rounded font-semibold";
  const styles = {
    primary: "bg-primary text-white hover:bg-analogous1",
    secondary: "bg-secondary text-white hover:bg-triadic1",
  };

  return (
    <button className={`${base} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
}
