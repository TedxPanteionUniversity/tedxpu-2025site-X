"use client";

import { useState } from "react";
import { events } from "@/data/historyEvents";
import { motion, AnimatePresence } from "framer-motion";
import { toEmbedUrl } from "@/utils/convertYoutube";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function HistoryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const params = useSearchParams();
  const selectedEvent = params.get("event");

  useEffect(() => {
  if (!selectedEvent) return;

  // Find the event by year
  const idx = events.findIndex(ev => ev.year.toString() === selectedEvent);

  if (idx !== -1) {
    setOpenIndex(idx);
    // optional: smooth scroll to it
    setTimeout(() => {
      const el = document.getElementById(`event-${idx}`);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }
}, [selectedEvent]);

  return (
    <main className="min-h-screen  text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Our <span className="text-red-600">10-Year</span> Journey
        </h1>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div 
              key={index}
              id={`event-${index}`}
              className="border border-gray-800 rounded-lg p-6 bg-zinc-900/40">
              
              {/* Header */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h2 className="text-2xl font-bold">
                  {event.year} — <span className="text-red-500">{event.title}</span>
                </h2>

                <span className="text-xl">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 space-y-4"
                  >
                    <p className="text-gray-300">{event.description}</p>

                    {/* Intro video */}
                    {event.introVideo && (
                      <iframe
                        className="w-full aspect-video mt-4 rounded-lg"
                        src={toEmbedUrl(event.introVideo)}
                        allowFullScreen
                      />
                    )}

                    {/* Speakers list */}
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold mb-2 text-red-500">Speakers</h3>
                      
                      <ul className="space-y-2">
                        {event.speakers.map((sp, i) => (
                          <li key={i}>
                            <a
                              href={sp.url}
                              target="_blank"
                              className="hover:text-red-400 underline"
                            >
                              {sp.title} — {sp.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
