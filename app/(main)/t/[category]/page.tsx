import HeroSection from "@/components/homepage/HeroSection/HeroSection";
import PhotoGrid from "@/components/homepage/PhotoGrid";
import TagList from "@/components/homepage/Tag/TagList";
import { notFound } from "next/navigation";

interface Props {
  params: {
    category: string;
  };
}

const categories = [
  "wallpapers",
  "nature",
  "3d-renders",
  "textures",
  "travel",
  "film",
  "people",
  "architecture-and-interiors",
  "street-photography",
  "experimental",
];

export default async function CategoryPage({ params }: Props) {
  // Await the params to access the category correctly
  const { category } = await params; // Đảm bảo await params

  if (!categories.includes(category)) {
    notFound(); // Nếu category không hợp lệ, gọi notFound()
  }

  return (
    <main className="min-h-screen">
      <div className="flex justify-center gap-6 px-4 max-w-7xl mx-auto">
        <div className="flex-2">
          <HeroSection displayName={category} />
        </div>
        <div className="flex-1">
          <TagList />
        </div>
        <div className="flex-1">
          <TagList />
        </div>
      </div>
      <div className="mt-10">
        <PhotoGrid />
      </div>
    </main>
  );
}
