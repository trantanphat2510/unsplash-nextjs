"use client";

import Image from "next/image";
import { ImageItem } from "@/app/api/images/route";
import MasonryPhotoGrid from "../PhotoGrid";
import Header from "./Header";

interface ImageModalProps {
  image: ImageItem;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()} // Không đóng modal khi click bên trong
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        <Header name="Tran Tan Phat" />
        <div className="relative w-full h-[60vh]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain rounded"
          />
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold">{image.alt}</p>
          <p className="text-sm text-gray-600">Tác giả: {image.author}</p>
        </div>

        <div className="mt-6">
          <MasonryPhotoGrid />
        </div>
      </div>
    </div>
  );
}
