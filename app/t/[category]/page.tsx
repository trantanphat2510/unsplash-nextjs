// /app/t/[category]/page.tsx
import { notFound } from "next/navigation";

const validCategories = [
  "wallpapers",
  "nature",
  "3d-renders",
  "textures",
  "travel",
  "film",
  "people",
  "architecture-and-interiors",
  "street-photography",
  "experimental",
];

interface Props {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: Props) {
  const { category } = params;

  if (!validCategories.includes(category)) {
    notFound(); // Trả về trang 404 nếu category không hợp lệ
  }

  const displayName = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div>
      <h1>{displayName}</h1>
      <p>Hiển thị nội dung cho danh mục: {displayName}</p>
    </div>
  );
}
