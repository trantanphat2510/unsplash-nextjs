import { useState } from "react";
import { ChevronDown, Heart, Plus, Check } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  availableForHire?: boolean;
  avatarUrl?: string;
}

export default function ProfileHeader({
  name = "Tran Tan Phat",
  availableForHire = true,
  avatarUrl = "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/473014024_615558860860795_7312029901608913680_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hbLat4MYoPkQ7kNvwGO3T2x&_nc_oc=Adm-UuXZo0aU8MO5wkJDkmZVZD6-DfMkg7FK0oM9PoPJ7QXQ6iZXWO11-S7uzftkh2o&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=EidMQzD54lXIXppAjzZwAQ&oh=00_AfKnwYsk7GiAbbhc8YclTFOTBnJ-eUNm6h9kdr-0H6u6YQ&oe=6833820C",
}: ProfileHeaderProps) {
  const [liked, setLiked] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full bg-white">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={avatarUrl}
            alt={`${name}'s avatar`}
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-gray-900 text-sm">{name}</h2>
          {availableForHire && (
            <div className="flex items-center gap-1">
              <span className="text-xs text-blue-500">Available for hire</span>
              <span className="text-blue-500">
                <Check size={16} />
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setLiked(!liked)}
          className="w-10 h-9 flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label={liked ? "Unlike" : "Like"}
        >
          <Heart
            size={20}
            className={liked ? "fill-gray-500 text-gray-500" : "text-gray-500"}
          />
        </button>

        <button
          className="w-10 h-9 flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Add to collection"
        >
          <Plus size={20} className="text-gray-500" />
        </button>

        <div className="relative">
          <div className="flex items-center">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-center gap-1 px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded-l-md transition-colors"
            >
              Download free
            </button>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-center h-8 px-2 bg-green-500 hover:bg-green-600 text-white rounded-r-md transition-colors border-l border-green-600"
            >
              <ChevronDown size={12} />
            </button>
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Download small
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Download medium
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Download large
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Download original
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
