// export default function ServiceCard({
//   image,
//   title,
//   description,
//   imageAlt,
//   imagePosition = "left",
// }) {
//   return (
//     <div className="flex items-center gap-6 p-6 w-4/5">
//       {imagePosition === "left" && (
//         <img src={image} alt={imageAlt} className="w-100 h-100 mr-10" />
//       )}
//       <div>
//         <h2 className="mb-2">{title}</h2>
//         <p className="text-text mb-4">{description}</p>
//         <Button label="LEARN MORE" variant="secondary" />
//       </div>
//       {imagePosition === "right" && (
//         <img src={image} alt={imageAlt} className="w-100 h-100 ml-10" />
//       )}
//     </div>
//   );
// }

import React from "react";
import Button from "../../../shared/components/Button";

export default function ServiceCard({
  image,
  title,
  description,
  imageAlt,
  imagePosition = "left",
}) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 overflow-hidden">
      {/* Mobile Layout - Stacked vertically for screens 375px and below */}
      <div className="flex flex-col items-center text-center sm:hidden">
        <div className="mb-6 w-full max-w-xs overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-4/5 h-4/5 mx-auto transition-transform duration-300 hover:-translate-y-2" 
          />
        </div>
        <div className="w-full">
          <h2 className="mb-4 text-lg font-semibold px-2">{title}</h2>
          <p className="text-text mb-6 leading-relaxed text-sm px-2">
            {description}
          </p>
          <Button label="LEARN MORE" variant="secondary" />
        </div>
      </div>

      {/* Desktop/Tablet Layout - Side by side for screens above 375px */}
      <div className="hidden sm:flex items-center gap-6 lg:gap-12">
        {imagePosition === "left" && (
          <div className="flex-shrink-0 overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="w-48 h-48 md:w-5/6 md:h-5/6 transition-transform duration-300 hover:-translate-y-2"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h2 className="mb-4 text-xl lg:text-2xl font-semibold">{title}</h2>
          <p className="text-text mb-6 leading-relaxed">{description}</p>
          <Button label="LEARN MORE" variant="secondary" />
        </div>
        {imagePosition === "right" && (
          <div className="flex-shrink-0 overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="w-48 h-48 md:w-5/6 md:h-5/6 transition-transform duration-300 hover:-translate-y-2"
            />
          </div>
        )}
      </div>
    </div>
  );
}
