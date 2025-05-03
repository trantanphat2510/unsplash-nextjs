import React from "react";

interface HeroSectionProps {
  displayName: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ displayName }) => {
  const formattedDisplayName =
    displayName.charAt(0).toUpperCase() + displayName.slice(1);

  return (
    <div className="py-8 px-4">
      <h1 className="text-5xl font-bold text-black mb-1">
        {formattedDisplayName.replace("3d-renders", "3D Renders")}
      </h1>
      <p className="text-gray-600 mb-4">Curated by Unsplash</p>

      <p className="text-lg text-black mb-6">
        From epic drone shots to inspiring moments in nature — enjoy the best
        background for your desktop or mobile.
      </p>

      <button className="bg-black text-white font-medium py-3 px-6 rounded-md hover:bg-gray-800 transition-colors">
        Submit to {formattedDisplayName.replace("3d-renders", "3D Renders")}
      </button>
    </div>
  );
};

export default HeroSection;
