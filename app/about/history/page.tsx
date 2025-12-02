"use client";

import { useState, useEffect, Suspense } from "react";
import { events } from "@/data/historyEvents";
import { motion, AnimatePresence } from "framer-motion";
import { toEmbedUrl } from "@/utils/convertYoutube";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

function HistoryContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const params = useSearchParams();
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  useEffect(() => {
    const eventParam = params.get("event");
    setSelectedEvent(eventParam);
  }, [params]);

  useEffect(() => {
    if (!selectedEvent) return;

    const idx = events.findIndex(ev => ev.year.toString() === selectedEvent);
    if (idx !== -1) {
      setOpenIndex(idx);
      setTimeout(() => {
        const el = document.getElementById(`event-${idx}`);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [selectedEvent]);

  return (
    <main className="min-h-screen  text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Our History
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

                    {/* Logo + Optional Video */}
                    <div
                      className={`mt-6 grid gap-6 items-center ${
                        event.introVideo && event.introVideo.trim() !== ""
                          ? "grid-cols-1 md:grid-cols-2" // video exists → 2 columns
                          : "grid-cols-1 place-items-center" // no video → centered large logo
                      }`}
                    >

                      {/* LOGO */}
                      <div
                        className={
                          event.introVideo && event.introVideo.trim() !== ""
                            ? ""
                            : "md:w-3/4" // no video → larger logo (75% width)
                        }
                      >
                        <Image
                          src={event.logo}
                          alt={`${event.title} logo`}
                          width={600}        // the *maximum* size it will ever display
                          height={300}       // maintain the original aspect ratio
                          className="w-full h-auto object-contain rounded-lg"
                          sizes="(max-width: 768px) 90vw,
                                (max-width: 1200px) 50vw,
                                500px"     // desktop size
                        />
                      </div>

                      {/* VIDEO (only if exists) */}
                      {event.introVideo && event.introVideo.trim() !== "" && (
                        <iframe
                          className="w-full aspect-video rounded-lg"
                          src={toEmbedUrl(event.introVideo)}
                          allowFullScreen
                        />
                      )}

                    </div>

                    {/* Speakers list */}
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold mb-2 text-red-500">Speakers</h3>
                      
                      <ul className="space-y-2">
                        {event.speakers?.map((sp, i) => (
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

                    {/* SPONSORS (only if exists) */}
                    <div className="mt-4">
                      {event.sponsors && event.sponsors.trim() !== "" && (
                        <h3 className="text-xl font-semibold mb-2 text-red-500">Sponsors</h3>
                      )}
                      {event.sponsors && event.sponsors.trim() !== "" && (
                        <img
                          src={event.sponsors}
                          alt={`${event.title} logo`}
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      )}
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

export default function HistoryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-xl">Loading...</div>
      </div>
    }>
      <HistoryContent />
    </Suspense>
  );
}
