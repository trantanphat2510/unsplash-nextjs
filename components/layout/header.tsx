"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import UnsplashLogo from "@/components/ui/unsplash-logo"
import SearchBar from "@/components/ui/search-bar"

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="flex items-center px-4 py-3 md:px-6">
        {/* Logo */}
        <div className="flex-shrink-0 mr-4">
          <UnsplashLogo color="black" />
        </div>

        {/* Search Bar - Takes up all available space */}
        <div className="flex-grow">
          <SearchBar />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center ml-4">
          <button className="hidden md:block text-sm font-medium px-2">Explore</button>
          <button className="hidden md:block text-sm font-medium px-2">Advertise</button>
          <button className="hidden md:block text-sm font-medium text-gray-900 px-2">Get Unsplash+</button>
          <div className="h-5 w-px bg-gray-200 hidden md:block mx-2"></div>
          <Link href="/login" className="hidden md:block text-sm font-medium px-2">
            Log in
          </Link>
          <Link
            href="/join"
            className="hidden md:block text-sm font-medium border border-gray-300 rounded-md px-3 py-1.5 ml-2"
          >
            Submit an image
          </Link>
          <button className="md:hidden ml-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      {/* <div className="px-4 pb-3 md:hidden">
        <SearchBar />
      </div> */}
    </header>
  )
}
