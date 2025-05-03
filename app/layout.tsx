import type React from "react";
import "./globals.css";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
