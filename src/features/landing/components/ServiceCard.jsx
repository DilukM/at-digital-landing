

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
    <div className="w-full  mx-auto p-6">
      {/* Mobile Layout - Stacked vertically for screens 375px and below */}
      <div className="block sm:hidden flex-col items-center text-center">
        <div className="mb-6">
          <img src={image} alt={imageAlt} className="w-24 h-24 mx-auto" />
        </div>
        <div>
          <h2 className="mb-4 text-xl font-semibold">{title}</h2>
          <p className="text-text mb-6 leading-relaxed">{description}</p>
          <Button label="LEARN MORE" variant="secondary" />
        </div>
      </div>

      {/* Desktop/Tablet Layout - Side by side for screens above 375px */}
      <div className="hidden sm:flex items-center gap-8 mx-30">
        {imagePosition === "left" && (
          <div className="flex-shrink-0">
            <img src={image} alt={imageAlt} className="w-32 h-32 lg:w-80 lg:h-80" />
          </div>
        )}
        <div className="flex-1">
          <h2 className="mb-4 text-xl lg:text-2xl font-semibold">{title}</h2>
          <p className="text-text mb-6 leading-relaxed">{description}</p>
          <Button label="LEARN MORE" variant="secondary" />
        </div>
        {imagePosition === "right" && (
          <div className="flex-shrink-0">
            <img src={image} alt={imageAlt} className="w-32 h-32 lg:w-80 lg:h-80" />
          </div>
        )}
      </div>
    </div>
  );
}
