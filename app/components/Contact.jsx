"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const Contact = ({ isDark }) => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "252fd7d9-dbad-4a76-854c-233dbce120f0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setResult("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      setResult("⚠️ Network error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-size-[90%_auto] dark:bg-none transition-all duration-500"
    >
      {/* Heading */}
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h4 className="mb-3 text-lg font-ovo text-accent tracking-wide">
          Connect with me
        </h4>

        <h2 className="text-4xl sm:text-5xl font-ovo">
          Get in Touch
        </h2>

        <p className="max-w-2xl mx-auto mt-5 mb-14 text-gray-600 dark:text-white/70 font-ovo leading-relaxed">
          I&apos;d love to hear from you! If you have any questions, comments or
          feedback, feel free to send a message.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={onSubmit}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-2xl mx-auto space-y-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="p-4 rounded-xl border border-gray-200 dark:border-white/15 bg-white/70 dark:bg-darkHover/40 backdrop-blur-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-white/40"
          />

          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="p-4 rounded-xl border border-gray-200 dark:border-white/15 bg-white/70 dark:bg-darkHover/40 backdrop-blur-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-white/40"
          />
        </div>

        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 rounded-xl border border-gray-200 dark:border-white/15 bg-white/70 dark:bg-darkHover/40 backdrop-blur-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-white/40 resize-none"
        />

        <div className="flex justify-center pt-2">
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.04 }}
            whileTap={{ scale: loading ? 1 : 0.96 }}
            className="py-3.5 px-10 flex items-center gap-2 bg-linear-to-r from-accent to-accentSoft text-white rounded-full shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Submit Now
                <Image
                  src={assets.right_arrow_white}
                  alt="arrow"
                  className="w-3.5"
                />
              </>
            )}
          </motion.button>
        </div>

        {result && (
          <p className="text-center mt-4 text-sm font-medium animate-fadeIn">
            {result}
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;