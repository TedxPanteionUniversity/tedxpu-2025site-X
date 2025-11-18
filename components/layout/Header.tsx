/* Header Component */

"use client"; // Rendered on client side
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import { useSound } from "@/utils/useSound";

export default function Header() {
  const playClick = useSound("/sounds/Persona5.mp3");

  const handleClick = () => {
    playClick();
  };
  
  return (
    <header className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 lg:flex-row lg:gap-x-160 gap-10">
        <div className="w-full lg:w-1/2">
          {/* Replace /logo.png with your actual logo in /public/images */}
          <Link href="/"
            onClick={playClick}
          >
          <Image
            src="/images/logo-white.png"
            alt="TEDx Logo"
            width={200}
            height={50}
            className="cursor-pointer lg:scale-120"
          />
          </Link>
        </div>
        <div className="lg:block lg:w-1/2">
          <Navigation />
        </div>

      </div>
    </header>
  );
}
