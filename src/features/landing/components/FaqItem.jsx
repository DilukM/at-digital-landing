import React, { useState } from 'react';

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-textSubtle py-4">
      <div
        className="cursor-pointer font-semibold text-text hover:text-primary"
        onClick={() => setOpen(!open)}
      >
        {question}
      </div>
      {open && <p className="mt-2 text-textSubtle">{answer}</p>}
    </div>
  );
}