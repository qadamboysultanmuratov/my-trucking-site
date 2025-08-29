import React from "react";
import { motion } from "framer-motion";
import { Truck, Building2, User } from "lucide-react"; 

const opportunities = [
  {
    icon: <User className="w-12 h-12 text-blue-600" />,
    title: "Company Driver",
    points: [
      "High gross earnings",
      "Personalized dispatch",
      "24/7 support",
      "Specialized freight",
      "Direct customer loads",
      "Well-maintained equipment",
      "Flexible home time",
      "Reliable, on-time payments",
    ],
    buttonUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeRIiklc1VL1FaAXB5zV-c0o3Im_8K8tpinyoWvPVO7Qw1QVQ/viewform?usp=dialog",
    buttonLabel: "Join",
  },
  {
    icon: <Truck className="w-12 h-12 text-blue-600" />,
    title: "Owner Operator",
    points: [
      "High gross potential",
      "Personalized dispatch",
      "24/7 support",
      "Specialized freight",
      "Direct customer approach",
      "Maximize profits with dedicated loads",
    ],
    buttonUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeRIiklc1VL1FaAXB5zV-c0o3Im_8K8tpinyoWvPVO7Qw1QVQ/viewform?usp=dialog",
    buttonLabel: "Apply",
  },
  {
    icon: <Building2 className="w-12 h-12 text-blue-600" />,
    title: "Brokers",
    points: [
      "OTR Lane Solutions",
      "Local and Regional solutions",
      "Cross country USA-CANADA",
      "TWIC and TSA drivers",
      "Consistent and sporadic lane solutions",
    ],
    buttonUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfF2_8y77-wi9KtM6sR4L_2UjVPRsKWh-9h-usNV-Ef-d7lCg/viewform?usp=header",
    buttonLabel: "Quote",
  },
];

export default function WorkWithUs() {
  return (
    <section className="py-20 bg-gray-50" id="work-with-us">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Work With Us
        </motion.h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Join our growing team of professionals and partners. Choose the path
          that fits you best.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {opportunities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition flex flex-col"
            >
              <div className="mb-6 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

              <ul className="text-gray-600 text-left mb-6 space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span> {point}
                  </li>
                ))}
              </ul>

              <a
                href={item.buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                {item.buttonLabel}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
