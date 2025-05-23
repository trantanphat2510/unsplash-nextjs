"use client";

import Image from "next/image";
import { ImageItem } from "@/app/api/images/route";
import MasonryPhotoGrid from "../PhotoGrid";
import Header from "./Header";

// Import Heroicons
import {
  ShareIcon,
  InformationCircleIcon,
  EllipsisHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

interface ImageModalProps {
  image: ImageItem;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ImageModal({
  image,
  onClose,
  onPrevious,
  onNext,
}: ImageModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 left-4 text-white hover:text-gray-300 text-xl z-60"
        onClick={onClose}
      >
        ✕
      </button>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-60"
        onClick={onPrevious}
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-60"
        onClick={onNext}
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>
      <div
        className="bg-white p-4 rounded-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
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
          <div className="px-6">
            <h3 className="text-[#767676] font-normal text-sm">Downloads</h3>
            <span className="font-medium text-base">999,999</span>
          </div>
          <div className="flex gap-2 mt-2 ml-auto">
            <button className="flex items-center gap-2 px-4 h-8 border border-gray-400 rounded-lg bg-white hover:bg-gray-50 transition-colors">
              <ShareIcon className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700 font-medium">Share</span>
            </button>

            <button className="flex items-center gap-2 px-4 h-8 border border-gray-400 rounded-lg bg-white hover:bg-gray-50 transition-colors">
              <InformationCircleIcon className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700 font-medium">Info</span>
            </button>

            <button className="flex items-center justify-center px-3 h-8 border border-gray-400 rounded-lg bg-white hover:bg-gray-50 transition-colors">
              <EllipsisHorizontalIcon className="w-4 h-4 text-gray-600" />
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
