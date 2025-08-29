import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">ACK Trans Inc</h3>
          <p className="text-gray-400">
            Reliable freight solutions across North America. Delivering your
            goods safely and on time — every mile, every load.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#whychooseus" className="hover:text-blue-400 transition">
                Why us?
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#workwithus" className="hover:text-blue-400 transition">
                Join us
              </a>
            </li>
            <li>
              <a href="#trustedby" className="hover:text-blue-400 transition">
                Partners
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                About us
              </a>
            </li>
            <li>
              <a href="#staffcarousel" className="hover:text-blue-400 transition">
                Our team
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-blue-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-blue-400 transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
          <p className="text-gray-400">📍 Philadelphia, PA, USA</p>
          <p className="text-gray-400">📞 +1 (215) 966-1144</p>
          <p className="text-gray-400">✉️ dispatchack@gmail.com</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:dispatchack@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ACK Trans Inc. All rights reserved.
        <p>
          <a
            href="/privacy-policy"
            className="hover:text-blue-400 transition"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="hover:text-blue-400 transition">
            Terms & Conditions
          </a>
        </p>
        <p className="mt-2">Made by Qadamboy Sultanmuraov</p>
      </div>
    </footer>
  );
}
