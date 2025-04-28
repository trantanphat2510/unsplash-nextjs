"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleClear = () => {
    setSearchText("");
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-4 w-4 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search photos and illustrations"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full rounded-full bg-gray-100 py-2.5 pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-gray-200"
      />
      {searchText && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button
            onClick={handleClear}
            className="rounded-full p-1 hover:bg-gray-200"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      )}
    </div>
  );
}
