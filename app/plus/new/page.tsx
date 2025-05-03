import PhotoGrid from "@/components/homepage/PhotoGrid";
import Collections from "@/components/homepage/Collections/Collections";
import TagList from "@/components/homepage/Tag/TagList";
import IllustrationCard from "@/components/homepage/IllustrationCard/IllustrationCard";

const sampleData = [
  {
    image: "/images/sample5.jpg",
    name: "Nature Desktop Wallpapers",
    count: 70,
  },
  { image: "/images/sample6.jpg", name: "Market Volatility", count: 40 },
  { image: "/images/sample7.jpg", name: "Celebrating Women", count: 60 },
  { image: "/images/sample8.jpg", name: "Spring Wallpapers", count: 60 },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex justify-center gap-6 px-4 max-w-7xl mx-auto mt-">
        <div className="flex-1">
          <Collections collections={sampleData} />
        </div>
        <div className="flex-1">
          <IllustrationCard />
        </div>
        <div className="flex-1">
          <TagList />
        </div>
        <div className="flex-1">
          <Collections collections={sampleData} />
        </div>
      </div>
      <div className="mt-10">
        <PhotoGrid />
      </div>
    </main>
  );
}
