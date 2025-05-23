"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategoryNav() {
  const pathname = usePathname();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const featuredCategories = [
    { name: "Photos", path: "/" },
    { name: "Illustrations", path: "/illustrations" },
    { name: "Unsplash+", path: "/plus/new" },
  ];

  const otherCategories = [
    "Wallpapers",
    "Nature",
    "3D Renders",
    "Textures",
    "Travel",
    "Film",
    "People",
    "Architecture & Interiors",
    "Street Photography",
    "Experimental",
  ];

  const getInitialCategory = () => {
    if (pathname === "/") return "Photos";
    if (pathname === "/illustrations") return "Illustrations";
    if (pathname === "/plus/new") return "Unsplash+";
    if (pathname?.startsWith("/t/")) {
      const slug = pathname
        .replace("/t/", "")
        .replace(/-and-/g, " & ")
        .replace(/-/g, " ");
      return slug
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ");
    }
    return "Photos";
  };

  const [activeCategory, setActiveCategory] = useState(getInitialCategory);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const getSlugPath = (name: string) => {
    const slug = name
      .toLowerCase()
      .replace(/ & /g, "-and-")
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
    return `/t/${slug}`;
  };

  return (
    <div className="relative border-b border-gray-200">
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-1.5 ml-1"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className="flex whitespace-nowrap px-5 py-3 overflow-x-auto scrollbar-hide"
        onScroll={checkScroll}
      >
        <div className="flex gap-5 border-r border-gray-200 pr-5">
          {featuredCategories.map((category) => (
            <div key={category.name} className="relative pb-3">
              <Link
                href={category.path}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  activeCategory === category.name
                    ? "text-black"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {category.name}
              </Link>
              {activeCategory === category.name && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-6 pl-6">
          {otherCategories.map((name) => (
            <div key={name} className="relative pb-3">
              <Link
                href={getSlugPath(name)}
                onClick={() => setActiveCategory(name)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  activeCategory === name
                    ? "text-black"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {name}
              </Link>
              {activeCategory === name && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-1.5 mr-1"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
