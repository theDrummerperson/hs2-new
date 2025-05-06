'use client';

import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_icbx9n2',     // Replace with your service ID
        'template_tv6r3bj',    // Replace with your template ID
        form.current,
        'FP298Dzv_TQdcmwEE'    // Replace with your public key
      )
      .then(
        () => setStatus('✅ Message sent!'),
        () => setStatus('❌ Failed to send. Please try again.')
      );

    e.target.reset();
  };

  return (
    <section className="max-w-2xl mx-auto px-6 py-10 bg-white rounded-2xl shadow-2xl border border-gray-100">

      <p className="text-center text-gray-600 mb-10">Got a question, proposal, or just want to say hi? Drop a message below.</p>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#8A0303] focus:border-[#8A0303] transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#8A0303] focus:border-[#8A0303] transition"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#8A0303] focus:border-[#8A0303] transition"
          />
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="inline-block bg-[#8A0303] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#6c0202] focus:ring-2 focus:ring-offset-2 focus:ring-[#8A0303] transition"
          >
            Send Message
          </button>
        </div>

        {status && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-sm text-gray-700 mt-4"
          >
            {status}
          </motion.p>
        )}
      </form>
    </section>
  );
}
