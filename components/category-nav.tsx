"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState("Photos")

  const categories = [
    { name: "Photos", featured: true },
    { name: "Illustrations", featured: true },
    { name: "Unsplash+", featured: true },
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

  return (
    <div className="border-b border-gray-200 overflow-x-auto">
      <div className="flex whitespace-nowrap px-4 py-3 gap-6">
        {categories.map((category) => (
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
    </div>
  )
}
