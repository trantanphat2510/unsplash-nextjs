import Header from "@/components/layout/header";
import CategoryNav from "@/components/category-nav";
import PhotoGrid from "@/components/homepage/PhotoGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryNav />
      {/* Rest of the homepage content */}
      <PhotoGrid />
    </main>
  );
}
