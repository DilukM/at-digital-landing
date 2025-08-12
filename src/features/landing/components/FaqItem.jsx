import React, { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden w-full">
      <div className="hover:bg-gray-50 transition-colors">
        <div
          className="flex justify-between items-center p-4 sm:p-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h3 className="text-sm sm:text-base lg:text-lg font-medium text-text pr-4 flex-1">
            {question}
          </h3>
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
            <span className="text-xl sm:text-2xl font-light text-primary">
              {open ? "−" : "+"}
            </span>
          </div>
        </div>
        {open && (
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100">
            <p className="text-textSubtle leading-relaxed pt-4 text-sm sm:text-base">
              {answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
