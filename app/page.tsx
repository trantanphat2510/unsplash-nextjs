import Header from "@/components/layout/header";
import CategoryNav from "@/components/category-nav";
import PhotoGrid from "@/components/homepage/PhotoGrid";
import { HomeHeader } from "@/components/homepage/HomeHeader/HomeHeader";
import Collections from "@/components/homepage/Collections/Collections";

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
      <Header />
      <CategoryNav />
      <div className="flex justify-center gap-6 px-4 max-w-7xl mx-auto mt-8">
        <div className="flex-1">
          <HomeHeader />
        </div>
        <div className="flex-1">
          <Collections collections={sampleData1} />
        </div>
      </div>
      <div className="mt-10">
        <PhotoGrid />
      </div>
    </main>
  );
}
