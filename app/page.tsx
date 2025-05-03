import Header from "@/components/layout/header";
import CategoryNav from "@/components/category-nav";
import PhotoGrid from "@/components/homepage/PhotoGrid";
import { HomeHeader } from "@/components/homepage/HomeHeader/HomeHeader";
import Collections from "@/components/homepage/Collections/Collections";
import TagList from "@/components/homepage/Tag/TagList";

const sampleData1 = [
  {
    image: "/images/sample1.jpg",
    name: "Nature Desktop Wallpapers",
    count: 70,
  },
  { image: "/images/sample2.jpg", name: "Market Volatility", count: 40 },
  { image: "/images/sample3.jpg", name: "Celebrating Women", count: 60 },
  { image: "/images/sample4.jpg", name: "Spring Wallpapers", count: 60 },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="w-full fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <Header />
        <CategoryNav />
      </div>
      <div className="flex justify-center gap-6 px-4 max-w-7xl mx-auto mt-40">
        <div className="flex-2">
          <HomeHeader />
        </div>
        <div className="flex-1">
          <Collections collections={sampleData1} />
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
