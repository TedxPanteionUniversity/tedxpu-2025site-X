/* Home Page Hero Section */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen text-white flex items-center justify-center overflow-hidden ">
      {/* 🔴 Background Image Layer */}
      <Image
        src="/images/aexevent_logos-1.png"
        alt="TEDx Panteion background"
        fill
        className="object-cover opacity-50"  // adjust opacity here
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/30 z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
          <span className="text-red-600 left">TEDx</span> PanteionUniversity
        </h1>
        <h2 className="text-lg md:text-3xl text-gray-300 mb-4 font-bold leading-tight">
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
