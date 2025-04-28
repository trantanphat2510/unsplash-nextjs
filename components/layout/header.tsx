"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import UnsplashLogo from "@/components/ui/unsplash-logo";
import SearchBar from "@/components/ui/search-bar";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex items-center px-4 py-3 md:px-6">
        {/* Logo */}
        <div className="flex-shrink-0 mr-4">
          <UnsplashLogo color="black" />
        </div>

        {/* Search Bar */}
        <div className="flex-grow">
          <SearchBar />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center ml-4 space-x-5">
          <Link
            href="/explore"
            className="hidden md:block text-sm font-medium text-gray-600"
          >
            Explore
          </Link>
          <Link
            href="/advertise"
            className="hidden md:block text-sm font-medium text-gray-600"
          >
            Advertise
          </Link>
          <Link href="/plus" className="hidden md:block text-sm font-medium">
            Get Unsplash+
          </Link>
          <div className="h-5 w-px bg-gray-200 hidden md:block"></div>
          <Link
            href="/login"
            className="hidden md:block text-sm font-medium text-gray-600"
          >
            Log in
          </Link>
          <Link
            href="/join"
            className="hidden md:block text-sm font-medium border text-gray-600 rounded-md px-3 py-1.5"
          >
            Submit an image
          </Link>
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </div>
    </header>
  );
}
