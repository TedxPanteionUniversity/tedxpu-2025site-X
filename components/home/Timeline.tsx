"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type EventType = {
  id: string;
  year: string;
  title: string;
  image: string;
  highlight?: boolean;
};

const Events: EventType[] = [
  { id: "0", year: "2026", title: "TBA ", image: "images/history/2026.jpg", highlight: true },
  { id: "1", year: "2025", title: "Luminescense", image: "images/history/2025.jpg"},
  { id: "2", year: "2024", title: "Urban Maze", image: "images/history/2024.jpg"},
  { id: "3", year: "2023", title: "Feed", image: "images/history/2023.jpg"},
  { id: "4", year: "2022", title: "Happy Medium", image: "images/history/2022.jpg"},
  { id: "5", year: "2021", title: "Incentive", image: "images/history/2021.jpg"},
  { id: "7", year: "2019", title: "The Age of Smupid", image: "images/history/2019.jpg"},
  { id: "8", year: "2018", title: "Elephant in The Room", image: "images/history/2018.jpg"},
  { id: "9", year: "2017", title: "Break The Pattern", image: "images/history/2017.jpg"},
  { id: "10", year: "2016", title: "Frameworks", image: "images/history/2016.jpg"},
];

type Event = {
  id: string;
  year: string;
  title: string;
  image: string;
  highlight?: boolean;
};

export default function Timeline({ events = Events }: { events?: EventType[] }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-5xl lg:text-7xl font-bold mb-16 text-center">
        Our History
      </h2>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((ev, index) => (
          <Link key={ev.id} href={`/about/history?event=${ev.year}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className={`
                p-6 rounded-xl border shadow-xl cursor-pointer
                transition-all duration-300 
                bg-[#0a0a0a]/80 backdrop-blur-sm
                
                ${ev.highlight 
                  ? "border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.35)]" 
                  : "border-gray-800 hover:border-red-500 hover:shadow-[0_0_15px_rgba(255,0,0,0.25)]"
                }
              `}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={ev.image}
                  alt={ev.title}
                  fill
                  className="object-cover opacity-40 group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />

              {/* Text */}
              <div className="relative p-6">
                <p className="text-red-500 font-bold text-sm">{ev.year}</p>
                <h3 className="text-2xl font-bold mt-2">{ev.title}</h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
