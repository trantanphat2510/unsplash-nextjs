import Header from "@/components/layout/header";
import CategoryNav from "@/components/category-nav";
import PhotoGrid from "@/components/homepage/PhotoGrid";
import { HomeHeader } from "@/components/homepage/HomeHeader/HomeHeader";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryNav />
      <HomeHeader />
      <PhotoGrid />
    </main>
  );
}
