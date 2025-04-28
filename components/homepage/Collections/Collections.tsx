import React from "react";

interface CollectionItem {
  image: string;
  name: string;
  count: number;
}

interface CollectionsProps {
  collections: CollectionItem[];
}

const Collections: React.FC<CollectionsProps> = ({ collections }) => {
  return (
    <div className="w-75 p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Collections</h2>
        <a
          href="#"
          className="text-sm font-normal text-[#A0A0A0] underline hover:underline font-sans"
        >
          See all
        </a>
      </div>
      <div className="space-y-3">
        {collections.map((collection, index) => (
          <div key={index} className="flex items-center space-x-3">
            <img
              src={collection.image}
              alt={collection.name}
              className="w-12 h-12 object-cover rounded-md flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">
                {collection.name}
              </p>
              <p className="text-xs text-gray-500">{collection.count} images</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
