"use client";

import React from "react";
import { Logo } from "./Logo";
import SearchBar from "@/components/ui/search-bar";

export const HomeHeader: React.FC = () => {
  return (
    <div className="flex w-full max-w-7xl mx-auto mt-20 px-10">
      {/* Left section */}
      <div className="flex flex-col items-start flex-1">
        <Logo />
        <p className="mt-4 text-lg text-gray-700">
          The internet’s source for visuals.
        </p>
        <p className="text-md text-gray-600">Powered by creators everywhere.</p>
        <div className="mt-6 mb-10 w-full max-w-xl">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};
