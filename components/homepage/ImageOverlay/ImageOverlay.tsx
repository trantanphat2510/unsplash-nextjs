import React from "react";
import { FiPlus, FiDownload } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

interface ImageOverlayProps {
  description: string;
  author: string;
  avatarUrl: string;
}

export const ImageOverlay: React.FC<ImageOverlayProps> = ({
  description,
  author,
  avatarUrl = "https://inkythuatso.com/uploads/thumbnails/800/2022/03/anh-dai-dien-facebook-dep-cho-nam-53-28-16-28-17.jpg",
}) => {
  return (
    <div className="absolute inset-0 p-4 flex flex-col justify-between">
      {/* Top section - Like and Add buttons */}
      <div className="flex justify-end gap-2">
        {/* Heart button - nền xám nhạt, icon đầy */}
        <button className="p-2 bg-gray-100 shadow-md rounded-lg text-gray-600 hover:opacity-90 transition-all">
          <AiFillHeart className="w-5 h-5" />
        </button>

        {/* Plus button - nền xám nhạt, icon xám đậm */}
        <button className="p-2 bg-gray-100 shadow-md rounded-lg text-gray-600 hover:opacity-90 transition-all">
          <FiPlus className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom section - Author with Avatar and Download */}
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-2 text-white">
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-10 h-10 rounded-full object-cover border border-white"
          />
          <div className="text-white">
            <p className="text-xs font-medium">{description}</p>
            <p className="text-xs opacity-90">{author}</p>
          </div>
        </div>

        <button className="flex items-center gap-1 bg-gray-100 shadow-md text-gray-600 px-3 py-2 rounded-lg hover:opacity-90 transition-all text-sm">
          <FiDownload className="w-4 h-4 text-gray-600" />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
};
