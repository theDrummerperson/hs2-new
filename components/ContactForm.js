'use client';

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_icbx9n2",      // replace with your EmailJS service ID
      "template_tv6r3bj",     // replace with your template ID
      form.current,
      "FP298Dzv_TQdcmwEE"       // replace with your public key
    ).then(
      () => setStatus("✅ Message sent!"),
      () => setStatus("❌ Failed to send. Please try again.")
    );

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6 max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-[#8A0303]">Get in Touch</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded"
      />

      <button type="submit" className="bg-[#8A0303] text-white px-6 py-2 rounded hover:bg-[#600202] transition">
        Send Message
      </button>

      {status && <p className="text-sm pt-2 text-center text-gray-700">{status}</p>}
    </form>
  );
}
