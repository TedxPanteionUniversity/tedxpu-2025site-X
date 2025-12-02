/* Event Page */
"use client";

import { motion } from "framer-motion";

export default function MissionPage() {
  return (
    <main className="min-h-screen text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

      {/* Title */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
        <span className="text-red-600">Event</span>
        </motion.h1>
        
        <motion.section
          className="mb-20 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

        {/* BODY TEXT */}
          <div className="text-lg md:text-xl leading-relaxed space-y-6 text-gray-200">

            <p>
              Για πολλούς το <span className="text-red-600 font-semibold">10</span> είναι ένας αριθμός. 
              Το <span className="text-red-600 font-semibold">Χ</span> ένας λατινικός χαρακτήρας.  
              Για το <span className="text-red-500 font-bold">TEDxPanteion University</span> το 10, το Χ είναι γιορτή.  
              Είναι χαρά, εμπειρίες, ιδέες, δημιουργικότητα και συνεργασία.
            </p>

            <p>
              Με αφορμή τον εορτασμό των 
              <span className="text-red-600 font-semibold"> 10 χρόνων</span>,  
              διοργανώσαμε το event <span className="text-red-500 font-bold">“X”</span>,  
              όπου όλοι θα ξανασυναντηθούμε, να θυμηθούμε από που ξεκινήσαμε και 
              πού έχουμε φτάσει σήμερα.
            </p>

            <p>
              Την <span className="text-red-600 font-semibold">Παρασκευή 5 Δεκεμβρίου 2025 </span>  
              στο ιστορικό Ξενοδοχείο <span className="text-red-500 font-bold">«Μπάγκειον»</span>,  
              το registration ξεκινά στις 
              <span className="text-red-600 font-semibold"> 19:30 </span>  
              και η επίσημη έναρξη του event θα γίνει στις 
              <span className="text-red-500 font-bold"> 20:30</span>.
            </p>

          </div>

        </motion.section>

      <div className="grid md:grid-cols-2 gap-8">
        <img
          src="/images/venue.png"
          className="w-full h-80 object-cover rounded-lg shadow-lg"
          alt="TEDx Venue"
          width = {300}
          height = {80}
        />

        <iframe
          className="w-full h-80 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211.60101412560715!2d23.72800439304837!3d37.98336959386975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3aa9e26d71%3A0xee0ac971e1705f0d!2sBankeion!5e0!3m2!1sen!2sgr!4v1763656780819!5m2!1sen!2sgr"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
      </div>
    </main>

  );
}
