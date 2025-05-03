import React from "react";

const IllustrationCard: React.FC = () => {
  return (
    <div className="relative w-72 h-76 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-600 to-blue-800">
      <img
        src="/images/sample3.jpg" // Thay bằng đường dẫn ảnh đúng
        alt="Illustration"
        className="absolute right-0 bottom-0 h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-blue-800/90 via-blue-800/60 to-transparent p-6 flex flex-col justify-between">
        <div>
          <div className="text-white font-semibold text-lg mb-2">
            <span className="font-bold">Your illustrations, everywhere.</span>{" "}
            <span className="text-white/60">
              No <br />
              need to be a pro—
              <br /> anyone can contribute.
            </span>
          </div>
        </div>

        <button className="mt-6 bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition w-fit">
          Upload your first SVG
        </button>
      </div>
    </div>
  );
};

export default IllustrationCard;
