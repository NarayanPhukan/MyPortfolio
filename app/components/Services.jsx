"use client"

import { assets } from "@/assets/assets"
import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  {
    icon: assets.web_icon,
    title: "Full-Stack Web Apps",
    description:
      "End-to-end MERN applications — from pixel-perfect React UIs to scalable Node.js + Express REST APIs backed by MongoDB.",
    link: "#work",
  },
  {
    icon: assets.mobile_icon,
    title: "REST API Development",
    description:
      "Designing and building secure, well-documented REST APIs with Express.js, JWT authentication, and MongoDB.",
    link: "#work",
  },
  {
    icon: assets.ui_icon,
    title: "Frontend Development",
    description:
      "Responsive, accessible React & Next.js interfaces with smooth animations, clean component architecture, and great UX.",
    link: "#work",
  },
  {
    icon: assets.graphics_icon,
    title: "Database Design",
    description:
      "Efficient MongoDB schema design, indexing strategies, and integration with Mongoose for production-ready data layers.",
    link: "#work",
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function Services({ isDark }) {
  return (
    <section
      id="services"
      className="relative w-full px-[12%] py-16 scroll-mt-20"
    >

      {/* Heading */}
      <motion.div
        className="text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h4
          variants={fadeUp}
          className="mb-3 text-lg font-ovo text-accent tracking-wide"
        >
          What I Offer
        </motion.h4>

        <motion.h2
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-ovo"
        >
          My Services
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto mt-6 mb-16 text-gray-600 dark:text-white/70 leading-relaxed"
        >
          I specialise in the full MERN stack — from interactive frontends to
          secure, scalable server-side systems and database architecture.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="group relative border border-gray-200 dark:border-white/15 rounded-3xl px-7 py-10 cursor-pointer transition-all duration-500 hover:shadow-[0_12px_40px_rgba(99,102,241,0.1)] hover:border-accent/30 dark:hover:border-accent/40 bg-white dark:bg-darkSurface/50 hover:bg-white dark:hover:bg-darkHover/40"
          >
            {/* Icon with accent bg */}
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-linear-to-br from-accent/10 to-purple-500/10 dark:from-accent/15 dark:to-purple-500/15 group-hover:from-accent/20 group-hover:to-purple-500/20 transition-all duration-500 mb-6">
              <Image
                src={icon}
                alt={title}
                width={26}
                height={26}
                className="w-auto h-auto transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="text-lg mb-3 font-semibold text-gray-800 dark:text-white">
              {title}
            </h3>

            <p className="text-sm leading-6 text-gray-500 dark:text-white/60">
              {description}
            </p>

            <a
              href={link}
              className="inline-flex items-center gap-2 text-sm mt-6 font-medium text-accent group-hover:gap-3 transition-all duration-300"
            >
              See projects
              <Image
                src={isDark ? assets.right_arrow_dark : assets.right_arrow}
                alt=""
                width={14}
                height={14}
                className="w-auto h-auto transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Subtle hover glow */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500 -z-10 blur-xl" />
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}