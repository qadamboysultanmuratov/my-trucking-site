import React from "react";
import { motion } from "framer-motion";
import { Truck, Package, Shield } from "lucide-react"; // Icons from lucide-react

const services = [
  {
    icon: <Truck className="w-12 h-12 text-blue-600" />,
    title: "Full Truckload (FTL)",
    description:
      "Reliable FTL shipping solutions across the U.S. and Canada, ensuring timely deliveries for large shipments.",
  },
  {
    icon: <Package className="w-12 h-12 text-blue-600" />,
    title: "Less Than Truckload (LTL)",
    description:
      "Cost-effective transportation for smaller loads with flexible scheduling and secure handling.",
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: "Specialized Freight",
    description:
      "Safe transport for temperature-controlled, oversized, or high-value cargo with advanced tracking.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Our Services
        </motion.h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          At ACK Trans Inc, we offer a full range of transportation services designed to keep your business moving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
