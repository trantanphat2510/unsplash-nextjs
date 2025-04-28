// app/components/MasonryPhotoGrid.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const fetchImages = async (page = 1, limit = 30): Promise<ImageItem[]> => {
  const response = await fetch(`/api/images?page=${page}&limit=${limit}`);
  const data = await response.json();
  return data.images;
};

export default function MasonryPhotoGrid() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState<
    [ImageItem[], ImageItem[], ImageItem[]]
  >([[], [], []]);

  useEffect(() => {
    const loadInitialImages = async () => {
      try {
        setLoading(true);
        const newImages = await fetchImages(1, 30);
        setImages(newImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    loadInitialImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const cols: [ImageItem[], ImageItem[], ImageItem[]] = [[], [], []];
      const colHeights = [0, 0, 0];

      images.forEach((img) => {
        const shortestColIndex = colHeights.indexOf(Math.min(...colHeights));
        cols[shortestColIndex].push(img);
        colHeights[shortestColIndex] += img.height / img.width;
      });

      setColumns(cols);
    }
  }, [images]);

  const loadMoreImages = async () => {
    if (!loading) {
      try {
        setLoading(true);
        const nextPage = page + 1;
        const newImages = await fetchImages(nextPage, 30);
        setImages((prev) => [...prev, ...newImages]);
        setPage(nextPage);
      } catch (error) {
        console.error("Error loading more images:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 500
      ) {
        loadMoreImages();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, loading]);

  if (images.length === 0 && !loading) {
    return <div className="text-center py-8">No images to display</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row gap-1">
        <div className="w-1/4 flex flex-col gap-1">
          {columns[0].map((img) => (
            <div
              key={img.id}
              className="w-full relative aspect-w-1 aspect-h-1"
              style={{
                aspectRatio: `${img.width} / ${img.height}`, // Giữ tỷ lệ đúng
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="w-2/5 flex flex-col gap-1">
          {columns[1].map((img) => (
            <div
              key={img.id}
              className="w-full relative aspect-w-1 aspect-h-1"
              style={{
                aspectRatio: `${img.width} / ${img.height}`, // Giữ tỷ lệ đúng
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="w-[35%] flex flex-col gap-1">
          {columns[2].map((img) => (
            <div
              key={img.id}
              className="w-full relative aspect-w-1 aspect-h-1"
              style={{
                aspectRatio: `${img.width} / ${img.height}`, // Giữ tỷ lệ đúng
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {loading && (
        <div className="w-full py-4 text-center">
          <p>Loading more images...</p>
        </div>
      )}
    </div>
  );
}
