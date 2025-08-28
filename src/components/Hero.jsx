import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background image */}
      <img
        src="/images/truck-bg.jpg"
        alt="Truck on highway"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4"
        >
          Reliable Freight Solutions Across North America
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl mb-6 text-gray-200"
        >
          Delivering your goods safely and on time — every mile, every load.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#contact"
            className="inline-block px-6 py-3 text-white font-semibold rounded-lg shadow-md bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-600 hover:to-blue-800 transition-all"
          >
            Call now
          </a>
        </motion.div>
      </div>
    </section>
  );
}