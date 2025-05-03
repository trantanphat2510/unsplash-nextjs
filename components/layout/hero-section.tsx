import Image from "next/image";
import UnsplashLogo from "@/components/ui/unsplash-logo";

interface HeroSectionProps {
  title: string;
  description: string;
  imageCredit?: string;
  imageSrc: string;
}

export default function HeroSection({
  title,
  description,
  imageCredit,
  imageSrc,
}: HeroSectionProps) {
  return (
    <div className="relative w-full md:w-1/2 bg-gray-900 text-white">
      <div className="absolute inset-0">
        <Image
          src={imageSrc || "/images/background-join.png"}
          alt="Hero background"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      <div className="absolute top-4 left-4">
        <UnsplashLogo color="white" />
      </div>

      <div className="relative flex flex-col justify-between h-full p-8 md:p-12">
        <div className="mt-16 md:mt-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl max-w-md">{description}</p>
        </div>

        {imageCredit && (
          <div className="text-sm text-gray-300 mt-8 md:mt-0">
            {imageCredit}
          </div>
        )}
      </div>
    </div>
  );
}
