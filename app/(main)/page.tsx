import Collections from "@/components/homepage/Collections/Collections";
import { HomeHeader } from "@/components/homepage/HomeHeader/HomeHeader";
import MasonryPhotoGrid from "@/components/homepage/PhotoGrid";
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
      <div className="flex justify-center gap-6 px-4 max-w-7xl mx-auto mt-8">
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
        <MasonryPhotoGrid />
      </div>
    </main>
  );
}
