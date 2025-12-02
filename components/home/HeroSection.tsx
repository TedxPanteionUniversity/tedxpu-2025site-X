/* Home Page Hero Section */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative 
                        min-h-[60lvh]     /* Mobile safe height */
                        sm:min-h-[90svh]  /* Small devices */
                        md:min-h-screen    /* Tablets + small laptops */
                        lg:min-h-screen    /* Large screens */
                      text-white flex flex-col items-center justify-center overflow-hidden">
      {/* 🔴 Background Image Layer */}
      <div className="absolute inset-0 scale-[1.5] md:scale-[1.1] landscape:scale-[1.14]">
        <Image
          src="/images/X_Logo.png"
          alt="TEDx Panteion background"
          fill
          className="object-contain opacity-60"  // adjust opacity here
          priority
          sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 100vw,
         940px"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/30 z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 px-6 md:px-26">
          <div className="-ml-2 flex flex-col space-y-1">
                    <Image
                      src="/images/logo-white.png"
                      alt="TEDx Logo"
                      width={500}
                      height={100}
                    />
          
                 
          </div>
        </h1>
        <h2 className="text-3xl text-gray-300 mb-4 leading-tight">
          Γιορτάζουμε 10 χρόνια TEDxPanteionUniversity.
        </h2>
        <h2 className="text-lg md:text-xl text-gray-300 mb-8">
          Μια δεκαετία γεμάτη ιδέες, έμπνευση, δημιουργία και ανθρώπους που τόλμησαν να μοιραστούν το 
          όραμά τους.
        </h2>
        <div className="flex justify-center">
          <a
            href="/event"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300"
          >
            Join the Event
          </a>
        </div>
      </motion.div>
    </section>
  );
}
