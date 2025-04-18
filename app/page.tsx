import Header from "@/components/layout/header"
import CategoryNav from "@/components/category-nav"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryNav />
      {/* Rest of the homepage content */}
    </main>
  )
}
