"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useSound } from "@/utils/useSound";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const playClick = useSound("/sounds/Persona5.mp3");

  const handleClick = () => {
    playClick();
  };

  // 🔹 Refs for outside click detection
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const aboutMenuRef = useRef<HTMLDivElement>(null);

  // 🔹 Handle clicks outside menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileOpen(false);
      }

      if (
        aboutMenuRef.current &&
        !aboutMenuRef.current.contains(event.target as Node)
      ) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/event", label: "Event" },
  ];

  const aboutLinks = [
    { href: "/about", label: "Tedx" },
    { href: "/about/team", label: "Our Team" },
    { href: "/about/history", label: "Our History" },
  ];

  return (
    <div className="relative">
      {/* 🔹 Desktop Navigation */}
      <nav className="hidden lg:flex flex-row space-x-8 text-sm{font-size: 14px} font-bold items-center">
        {navLinks.map((link) => (
          <Link 
            onClick={handleClick}
            key={link.href}
            href={link.href}
            className={`transition-colors ${
              pathname === link.href ? "text-red-500" : "hover:text-red-500"
            }`}
          >
            {link.label}
            
          </Link>
        ))}

        {/* ABOUT with dropdown toggle */}
        <div className="relative" ref={aboutMenuRef}>
          <button
            onClick={() => setIsAboutOpen((prev) => !prev)}
            className={`flex items-center gap-1 transition-colors ${
              pathname.startsWith("/about")
                ? "text-red-500"
                : "hover:text-red-500"
            }`}
          >
            About
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                isAboutOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {isAboutOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute md:right-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2 w-48 z-50"
              >
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      handleClick();
                      setIsAboutOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* 🔹 Mobile Hamburger Button */}
      <button
        className="lg:hidden flex items-center text-white"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* 🔹 Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 right-0 bg-black text-sm{font-size: 14px} font-bold text-white rounded-lg shadow-lg p-4 flex flex-col space-y-3 w-48 lg:hidden z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-red-500 transition-colors ${
                  pathname === link.href ? "text-red-500" : ""
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* About dropdown in mobile menu */}
            <div ref={aboutMenuRef}>
              <button
                onClick={() => setIsAboutOpen((prev) => !prev)}
                className="flex items-center justify-between w-full hover:text-red-500 transition-colors"
              >
                About
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-3 mt-2 space-y-1"
                  >
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm hover:text-red-500"
                        onClick={() => {
                          setIsAboutOpen(false);
                          setIsMobileOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
