import { NextResponse } from "next/server";
import sharp from "sharp";
import path from "path";

interface ImageItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  author: string;
}

const getImageDimensions = async (imagePath: string) => {
  try {
    const image = await sharp(imagePath);
    const metadata = await image.metadata();
    return { width: metadata.width || 0, height: metadata.height || 0 };
  } catch (error) {
    console.error("Error getting image dimensions:", error);
    return { width: 0, height: 0 };
  }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "20";

  const images: ImageItem[] = [];

  for (let i = 0; i < 1000; i++) {
    const imagePath = path.resolve(
      "public",
      "images",
      `sample${(i % 13) + 1}.jpg`
    );
    const { width, height } = await getImageDimensions(imagePath);

    images.push({
      id: `img-${i + 1}`,
      src: `/images/sample${(i % 13) + 1}.jpg`,
      alt: `Image ${i + 1}`,
      width,
      height,
      author: `Photographer ${i + 1}`,
    });
  }

  const startIndex = (parseInt(page) - 1) * parseInt(limit);
  const endIndex = startIndex + parseInt(limit);
  const selectedImages = images.slice(startIndex, endIndex);

  return NextResponse.json({ images: selectedImages });
}
