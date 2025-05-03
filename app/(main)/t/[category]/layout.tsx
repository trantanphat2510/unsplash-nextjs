import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/header";
import CategoryNav from "@/components/category-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unsplash",
  description:
    "The internet's source for visuals. Powered by creators everywhere.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string }; // category is passed directly
}) {
  // Await the params to access the category correctly
  const { category } = await params; // Await params here

  // If category is undefined or invalid, handle the error gracefully
  if (!category) {
    return <div>Error: Category not found</div>;
  }

  const locale = "en"; // Example of handling locale; adjust according to your needs

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="w-full fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <Header />
          <CategoryNav />
        </div>
        <main className="mt-40 px-4 max-w-7xl mx-auto min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
