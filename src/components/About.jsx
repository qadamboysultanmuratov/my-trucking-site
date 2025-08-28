import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/images/truck.png"
          alt="About ACK Trans"
          className="rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">About ACK TRANS INC
          </h2>
          <p className="text-gray-600 mb-6">
            ACK Trans Inc is a trusted trucking and logistics company dedicated to delivering excellence in freight transportation. Operating since 2018, we have proudly hauled hundreds of millions of miles and successfully delivered nearly 100,000 loads across the U.S. and Canada.
          </p>
          <p className="text-gray-600">
            Our commitment goes beyond just moving freight—we focus on building lasting partnerships through reliability, flexibility, and outstanding customer service. Backed by a skilled team and a modern fleet, we prioritize safety, efficiency, and clear communication every step of the way.

At ACK Trans Inc, your cargo isn’t just a shipment—it’s a promise. We ensure it arrives securely, on schedule, and with the professionalism you can count on.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
