"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ImageOverlay } from "./ImageOverlay/ImageOverlay";
import ImageModal from "./ImageModal/ImageModal";
import { ImageItem } from "@/app/api/images/route";

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
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null); // 💡 modal state

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

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row gap-6">
          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col gap-6 ${
                colIndex === 0 ? "w-1/4" : colIndex === 1 ? "w-2/5" : "w-[35%]"
              }`}
            >
              {column.map((img) => (
                <div
                  key={img.id}
                  className="w-full relative group rounded-lg overflow-hidden cursor-pointer"
                  style={{ aspectRatio: `${img.width} / ${img.height}` }}
                  onClick={() => setSelectedImage(img)} // 💡 mở modal
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover opacity-0 transition-opacity duration-700 group-hover:scale-105 group-hover:opacity-100"
                    onLoadingComplete={(imgEl) => {
                      imgEl.classList.remove("opacity-0");
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ImageOverlay
                      avatarUrl="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/473014024_615558860860795_7312029901608913680_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hbLat4MYoPkQ7kNvwGO3T2x&_nc_oc=Adm-UuXZo0aU8MO5wkJDkmZVZD6-DfMkg7FK0oM9PoPJ7QXQ6iZXWO11-S7uzftkh2o&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=EidMQzD54lXIXppAjzZwAQ&oh=00_AfKnwYsk7GiAbbhc8YclTFOTBnJ-eUNm6h9kdr-0H6u6YQ&oe=6833820C"
                      description="Tran Tan Phat"
                      author="For Unsplash+"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {loading && (
          <div className="w-full py-6 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
