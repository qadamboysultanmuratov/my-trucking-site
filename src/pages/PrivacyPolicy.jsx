import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-gray-900"
        >
          Privacy Policy
        </motion.h1>
        <p className="text-gray-600 mb-6">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            ACK Trans Inc ("we," "our," or "us") respects your privacy and is
            committed to protecting your personal information. This Privacy
            Policy explains what information we collect, how we use it, and who
            we share it with.
          </p>

          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Name, email address, phone number, and mailing address</li>
            <li>Business and company information (if applicable)</li>
            <li>SMS opt-in preferences and consent</li>
            <li>Other information you voluntarily provide</li>
          </ul>

          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide services, respond to inquiries, and fulfill requests</li>
            <li>Communicate with you, including via SMS (with your consent)</li>
            <li>Send appointment reminders, order updates, and notifications</li>
            <li>Improve our services and website</li>
          </ul>

          <h2 className="text-xl font-semibold">3. Sharing of Information</h2>
          <p>
            We do <strong>not</strong> sell or rent your personal information to
            third parties. We may share your information only with service
            providers who assist us in delivering our services (such as SMS
            providers). <strong>SMS consent is not shared with third parties or
            affiliates.</strong>
          </p>

          <h2 className="text-xl font-semibold">4. SMS Policy</h2>
          <p>
            By providing your mobile number, you consent to receive SMS messages
            from ACK Trans Inc. Message frequency may vary. Message and data
            rates may apply. Reply <strong>STOP</strong> to opt out or{" "}
            <strong>HELP</strong> for assistance.
          </p>

          <h2 className="text-xl font-semibold">5. Your Rights</h2>
          <p>
            You may request access, updates, or deletion of your personal
            information by contacting us:
          </p>
          <p>
            📧 Email: dispatchack@gmail.com <br />
            📍 Address: Philadelphia, PA, USA
          </p>
        </div>
      </div>
    </section>
  );
}
