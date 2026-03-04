"use client"

import { assets } from "@/assets/assets"
import Image from "next/image"
import { motion } from "framer-motion"

// ─── Replace serviceData import with inline data tailored to MERN stack ──────
// If you still want to drive this from assets.js, update serviceData there.
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

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full px-[12%] py-28 scroll-mt-24"
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
          className="mb-3 text-lg font-ovo text-gray-600 dark:text-white/70"
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
          className="max-w-2xl mx-auto mt-6 mb-16 text-gray-700 dark:text-white/80 leading-relaxed"
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
        className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10"
      >
        {services.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="group relative border border-gray-300 dark:border-white/30
                       rounded-3xl px-8 py-12
                       cursor-pointer
                       transition-all duration-500
                       hover:shadow-2xl
                       dark:hover:shadow-white/20
                       hover:bg-lightHover
                       dark:hover:bg-darkHover/40"
          >
            <div className="mb-6">
              <Image
                src={icon}
                alt={title}
                width={40}
                height={40}
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="text-lg mb-4 font-semibold text-gray-800 dark:text-white">
              {title}
            </h3>

            <p className="text-sm leading-6 text-gray-600 dark:text-white/80">
              {description}
            </p>

            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-8 font-medium group-hover:gap-3 transition-all duration-300"
            >
              See projects
              <Image
                src={assets.right_arrow}
                alt=""
                width={16}
                height={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <div className="absolute inset-0 rounded-3xl bg-purple-500 blur-3xl opacity-0 group-hover:opacity-10 transition duration-500 -z-10"></div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}