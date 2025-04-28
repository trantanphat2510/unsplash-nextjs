import React from "react";

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <span className="inline-block bg-gray-100 text-gray-700 text-sm rounded-md px-3 py-1 m-1 cursor-pointer select-none hover:bg-gray-200 transition">
      {label}
    </span>
  );
};

export default Tag;
