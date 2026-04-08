"use client"

import { assets, workData } from "@/assets/assets"
import Image from "next/image"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
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

export default function Work({ isDark }) {
  return (
    <section
      id="work"
      className="w-full px-[12%] py-16 scroll-mt-20"
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
          My Portfolio
        </motion.h4>

        <motion.h2
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-ovo"
        >
          My Latest Work
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto mt-6 mb-16 text-gray-600 dark:text-white/70 leading-relaxed"
        >
          A selection of full-stack MERN projects — each built with real-world
          requirements, clean architecture, and production-quality code.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-none border border-transparent hover:border-accent/20 dark:hover:border-accent/30 transition-all duration-500"
          >
            <div className="aspect-4/5 overflow-hidden">
              <Image
                src={project.bgImage}
                alt={project.title}
                width={600}
                height={750}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[88%] bg-white/90 backdrop-blur-md dark:bg-darkTheme/90 rounded-xl px-4 py-3 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:bottom-6"
            >
              <div className="min-w-0">
                <h3 className="font-semibold text-sm text-gray-800 dark:text-white truncate">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-white/60 mt-0.5">
                  {project.description}
                </p>
              </div>

              <a
                href={project.link || "#"}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="shrink-0 flex items-center justify-center w-9 h-9 ml-3 border border-gray-300 dark:border-white/30 rounded-full transition-all duration-300 hover:bg-accent hover:border-accent hover:shadow-[0_4px_12px_rgba(99,102,241,0.3)]"
              >
                <Image
                  src={assets.send_icon}
                  alt="View Project"
                  width={14}
                  height={14}
                  className="w-auto h-auto hover:invert dark:invert dark:hover:invert-0"
                />
              </a>
            </div>

          </motion.div>
        ))}
      </motion.div>

      {/* View All on GitHub */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center mt-20"
      >
        <a
          href="https://github.com/NarayanPhukan"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 border border-gray-300 dark:border-white/30 text-gray-700 dark:text-white rounded-full py-3 px-10 hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_4px_20px_rgba(99,102,241,0.25)] dark:hover:border-accent transition-all duration-500"
        >
          View all on GitHub
          <Image
            src={isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt=""
            width={16}
            height={16}
            className="w-auto h-auto transition-transform duration-300 group-hover:translate-x-1 group-hover:invert"
          />
        </a>
      </motion.div>

    </section>
  )
}