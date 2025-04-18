"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState("Photos")
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const featuredCategories = [
    { name: "Photos", featured: true },
    { name: "Illustrations", featured: true },
    { name: "Unsplash+", featured: true },
  ]

  const otherCategories = [
    { name: "Wallpapers" },
    { name: "Nature" },
    { name: "3D Renders" },
    { name: "Textures" },
    { name: "Architecture & Interiors" },
    { name: "Travel" },
    { name: "Film" },
    { name: "Street Photography" },
    { name: "People" },
    { name: "Animals" },
    { name: "Experimental" },
    { name: "Fashion & Beauty" },
    { name: "Food & Drink" },
    { name: "Sports" },
    { name: "Health & Wellness" },
  ]

  const checkScroll = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" })
  }

  const scrollRight = () => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" })
  }

  return (
    <div className="relative border-b border-gray-200">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-1.5 ml-1"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}

      {/* Categories */}
      <div
        ref={scrollContainerRef}
        className="flex whitespace-nowrap px-4 py-3 overflow-x-auto scrollbar-hide"
        onScroll={checkScroll}
      >
        {/* Featured Categories */}
        <div className="flex gap-6 border-r border-gray-200 pr-6">
          {featuredCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "text-sm font-medium transition-colors",
                activeCategory === category.name
                  ? "text-black border-b-2 border-black -mb-[1px]"
                  : "text-gray-500 hover:text-gray-900",
                category.featured ? "font-semibold" : "",
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Other Categories */}
        <div className="flex gap-6 pl-6">
          {otherCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "text-sm font-medium transition-colors",
                activeCategory === category.name
                  ? "text-black border-b-2 border-black -mb-[1px]"
                  : "text-gray-500 hover:text-gray-900",
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
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
  )
}
