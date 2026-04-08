"use client"

import { assets } from "@/assets/assets"
import { motion } from "framer-motion"
import Image from "next/image"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const scaleIn = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function Header() {
  return (
    <section
      id="top"
      className="relative w-11/12 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4"
    >

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >

        {/* Profile Image */}
        <motion.div
          variants={scaleIn}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative"
        >
          <Image
            src={assets.profile_img}
            alt="Narayan Phukan"
            width={150}
            height={150}
            priority
            className="w-auto h-auto rounded-full mx-auto shadow-xl dark:shadow-white/10 ring-4 ring-white/80 dark:ring-white/20"
          />
          {/* Animated glow behind profile */}
          <div className="absolute inset-0 rounded-full blur-3xl opacity-20 bg-linear-to-br from-accent to-purple-500 dark:opacity-30 -z-10 animate-pulse-glow" />
        </motion.div>

        {/* Greeting */}
        <motion.h3
          variants={fadeUp}
          className="flex items-end justify-center gap-2 text-lg sm:text-2xl font-ovo mt-8"
        >
          Hi, I&apos;m Narayan Phukan
          <Image src={assets.hand_icon} alt="" width={22} height={22} className="w-auto h-auto" />
        </motion.h3>

        {/* Main Title */}
        <motion.h1
          variants={fadeUp}
          className="mt-4 text-3xl sm:text-5xl lg:text-[3.5rem] font-ovo leading-tight"
        >
          Full-Stack <span className="text-gradient">MERN</span> Developer <br className="hidden sm:block" />
          Based in India
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto mt-6 text-gray-600 dark:text-white/70 leading-relaxed text-[15px]"
        >
          I build scalable, production-ready web apps with the MERN stack —
          clean React frontends, robust Node.js APIs, and MongoDB-powered backends.
          Open to full-time roles and freelance projects.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="px-10 py-3.5 rounded-full bg-linear-to-r from-accent to-accentSoft text-white flex items-center gap-2 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-shadow duration-500"
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="" width={14} height={14} className="w-auto h-auto" />
          </motion.a>

          <motion.a
            href="/sample-resume.pdf"
            download="Narayan_Phukan_Resume.pdf"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="px-10 py-3.5 rounded-full border border-gray-300 flex items-center gap-2 dark:border-white/30 dark:text-white hover:bg-lightHover dark:hover:bg-darkHover transition-all duration-500"
          >
            Download Resume
            <Image src={assets.download_icon} alt="" width={14} height={14} className="w-auto h-auto" />
          </motion.a>
        </motion.div>

      </motion.div>


    </section>
  )
}