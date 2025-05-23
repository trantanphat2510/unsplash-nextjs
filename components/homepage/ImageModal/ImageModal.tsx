"use client";

import Image from "next/image";
import { ImageItem } from "@/app/api/images/route";
import MasonryPhotoGrid from "../PhotoGrid";
import Header from "./Header";
import {
  Share,
  Info,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ImageModalProps {
  image: ImageItem;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export default function ImageModal({
  image,
  onClose,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
}: ImageModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Previous Button - Left side */}
      {hasPrev && onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
      )}

      {/* Next Button - Right side */}
      {hasNext && onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      )}

      <div
        className="bg-white p-4 rounded-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()} // Không đóng modal khi click bên trong
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl z-10"
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
        <div className="flex mt-4">
          <div className="px-2">
            <h3 className="text-[#767676] font-normal text-sm">Views</h3>
            <span className="font-medium text-base">999,999</span>
          </div>
          <div className="px-30">
            <h3 className="text-[#767676] font-normal text-sm">Downloads</h3>
            <span className="font-medium text-base">999,999</span>
          </div>
          <div className="flex gap-2 mt-2 ml-auto">
            {/* Share Button */}
            <button className="flex items-center gap-2 px-4 h-8 border border-gray-400 rounded-lg bg-white hover:bg-gray-50 transition-colors">
              <Share className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700 font-medium">Share</span>
            </button>

            {/* Info Button */}
            <button className="flex items-center gap-2 px-4 h-8 border border-gray-400 rounded-lg bg-white hover:bg-gray-50 transition-colors">
              <Info className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700 font-medium">Info</span>
            </button>

            {/* More Button */}
            <button className="flex items-center justify-center px-3 h-8 border border-gray-400 rounded-lg bg-white hover:bg-gray-50 transition-colors">
              <MoreHorizontal className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="mt-20">
          <p className="font-medium text-2xl">Related images</p>
        </div>
        <div className="mt-4">
          <MasonryPhotoGrid />
        </div>
      </div>
    </div>
  );
}
