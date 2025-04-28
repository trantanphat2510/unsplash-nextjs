import React from "react";
import Tag from "./Tag";

const tags = [
  "Ukraine",
  "Justice",
  "America",
  "Happy Easter",
  "Andorra",
  "Bible Study",
];

const TagList: React.FC = () => {
  return (
    <div className="max-w-xs p-4 border border-gray-200 rounded-lg space-y-33">
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <a
        href="#"
        className="inline-block mt-3 text-sm text-gray-600 hover:text-gray-900 cursor-pointer select-none"
      >
        See trending searches
      </a>
    </div>
  );
};

export default TagList;
