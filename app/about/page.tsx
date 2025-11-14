"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen  text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About <span className="text-red-600">TED</span> &{" "}
          <span className="text-red-600">TEDx</span>
        </motion.h1>

        {/* Section 1: About TEDx */}
        <motion.section
          className="mb-20 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-red-600">About TEDx</h2>

          <p className="text-gray-300 leading-relaxed">
            In the spirit of ideas worth spreading, TEDx is a program of local,
            self-organized events that bring people together to share a TED-like
            experience. At a TEDx event, TED Talks video and live speakers combine
            to spark deep discussion and connection.
          </p>

          <p className="text-gray-300 leading-relaxed">
            These local, self-organized events are branded TEDx, where x =
            independently organized TED event. The TED Conference provides general
            guidance for the TEDx program, but individual TEDx events are
            self-organized (subject to certain rules and regulations).
          </p>
        </motion.section>

        {/* Section 2: About TED */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-red-600">About TED</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-gray-300 leading-relaxed">
              TED is on a mission to discover and spread ideas that spark
              imagination, embrace possibility and catalyze impact. Our organization
              is devoted to curiosity, reason, wonder and the pursuit of knowledge —
              without an agenda. We welcome people from every discipline and culture
              who seek a deeper understanding of the world.
            </p>

            <p className="text-gray-300 leading-relaxed">
              TED began in 1984 as a conference where Technology, Entertainment and
              Design converged, but today it spans a multitude of worldwide
              communities and initiatives exploring everything from science and
              business to education, arts and global issues.
            </p>

            <p className="text-gray-300 leading-relaxed md:col-span-2">
              TED produces original podcasts, video series, TED-Ed lessons, and TV
              programs, translated into more than 100 languages. Through the Audacious
              Project, TED has helped catalyze more than $3 billion in funding for
              projects that aim to make the world more sustainable and just.
            </p>

            <p className="text-gray-300 leading-relaxed md:col-span-2">
              TED is owned by a nonprofit, nonpartisan foundation. Our aim is to help
              create a future worth pursuing for all.
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
