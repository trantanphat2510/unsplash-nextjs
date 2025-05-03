import Link from "next/link";

interface UnsplashLogoProps {
  color?: "black" | "white";
}

export default function UnsplashLogo({ color = "black" }: UnsplashLogoProps) {
  return (
    <Link href="/">
      <svg
        width="32"
        height="50"
        className={color === "black" ? "text-black" : "text-white"}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
          fill="currentColor"
        />
      </svg>
    </Link>
  );
}
