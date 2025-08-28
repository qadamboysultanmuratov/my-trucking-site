import React from "react";



export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact now</h2>
          <p className="mb-6 text-gray-700">
            Call us now we are 24/7
          </p>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>MC#:</strong> 127295
            </p>
            <p>
              <strong>DOT#:</strong> 3182208
            </p>
            <p>
              <strong>Address:</strong> 13015 Trina Dr Philadelphia PA 19116

            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:1234567890" className="text-blue-600 underline">
                (215) 966-1144
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:dispatchack@gmail.com" className="text-blue-600 underline">
                dispatchack@gmail.com
              </a>
            </p>
          </div>

          {/* Call Button */}
          <a
            href="tel:12159661144"
            className="mt-8 inline-block px-6 py-3 text-white font-semibold rounded-lg shadow-md bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-600 hover:to-blue-800 transition-all"
          >
            Call Now
          </a>
        </div>

        {/* Image */}
        <div>
          <img
            src="/images/bg.png" // Replace with your actual image path
            alt="Office background"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
