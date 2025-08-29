
import React from "react";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-gray-900"
        >
          SMS Terms & Conditions
        </motion.h1>
        <p className="text-gray-600 mb-6">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            By opting into SMS from a web form, website, or other medium, you
            are agreeing to receive SMS messages from ACK Trans Inc. This
            includes SMS messages for conversations, appointment reminders,
            order alerts, and account notifications.
          </p>

          <h2 className="text-xl font-semibold">1. Message Frequency</h2>
          <p>Message frequency may vary depending on your interaction.</p>

          <h2 className="text-xl font-semibold">2. Charges</h2>
          <p>Message and data rates may apply depending on your carrier.</p>

          <h2 className="text-xl font-semibold">3. Opt-Out</h2>
          <p>
            You can cancel SMS at any time by replying <strong>STOP</strong>.
            After opting out, you will no longer receive SMS messages from us.
          </p>

          <h2 className="text-xl font-semibold">4. Help</h2>
          <p>
            For support, reply <strong>HELP</strong> or contact us at{" "}
            <a
              href="mailto:dispatchack@gmail.com"
              className="text-blue-600 hover:underline"
            >
              dispatchack@gmail.com
            </a>{" "}
            or visit{" "}
            <a
              href="https://www.acktransinc.com"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.acktransinc.com
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold">5. Privacy</h2>
          <p>
            SMS consent is not shared with third parties or affiliates. Please
            see our{" "}
            <a href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{" "}
            for more details.
          </p>
        </div>
      </div>
    </section>
  );
}
