"use client";

import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  width?: string; // e.g. "full", "md", "lg", or specific width like "300px"
  height?: string; // e.g. "40px", "50px"
  iconSize?: number; // e.g. 16, 20, 24
  placeholder?: string;
  className?: string;
}

export default function SearchBar({
  width = "full",
  height = "40px",
  iconSize = 20,
  placeholder = "Search photos and illustrations",
  className = "",
}: SearchBarProps) {
  const [searchText, setSearchText] = useState("");

  const handleClear = () => {
    setSearchText("");
  };

  // Xử lý giá trị width
  const widthClass = width === "full" ? "w-full" : `w-${width}`;
  const customWidthStyle = width.includes("px") ? { width } : {};

  // Xử lý giá trị height
  const customHeightStyle = { height };

  return (
    <div
      className={`relative ${widthClass} ${className}`}
      style={width.includes("px") ? customWidthStyle : {}}
    >
      {/* Search icon on the left */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search
          className="text-gray-400"
          style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
        />
      </div>

      {/* Search input */}
      <input
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full py-2 pl-10 pr-4 text-gray-900 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-amber-50 focus:bg-white focus:outline-none transition-all duration-200"
        style={{
          ...customHeightStyle,
          paddingLeft: `calc(${iconSize}px + 1rem)`, // icon width + padding
        }}
      />

      {/* Clear button (appears only when there's text) */}
      {searchText && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
        >
          <svg
            style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
