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
    <section className="relative w-11/12 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4">

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
            width={140}
            height={140}
            priority
            className="rounded-full mx-auto shadow-xl dark:shadow-white/10"
          />
          <div className="absolute inset-0 rounded-full blur-2xl opacity-20 bg-purple-500 dark:opacity-30 -z-10"></div>
        </motion.div>

        {/* Greeting */}
        <motion.h3
          variants={fadeUp}
          className="flex items-end justify-center gap-2 text-lg sm:text-2xl font-ovo mt-6"
        >
          Hi, I&apos;m Narayan Phukan
          <Image src={assets.hand_icon} alt="" width={22} height={22} />
        </motion.h3>

        {/* Main Title */}
        <motion.h1
          variants={fadeUp}
          className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-ovo leading-tight"
        >
          Full-Stack MERN Developer <br className="hidden sm:block" />
          Based in India
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto mt-6 text-gray-700 dark:text-white/80 leading-relaxed"
        >
          I build scalable, production-ready web apps with the MERN stack —
          clean React frontends, robust Node.js APIs, and MongoDB-powered backends.
          Open to full-time roles and freelance projects.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-black text-white flex items-center gap-2 dark:bg-white dark:text-black transition"
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="" width={16} height={16} />
          </motion.a>

          {/* 
            FIX: Replace '/sample' with your actual resume PDF path.
            Place your resume at /public/resume.pdf and update href below.
          */}
          <motion.a
            href="/resume.pdf"
            download="Narayan_Phukan_Resume.pdf"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-gray-400 flex items-center gap-2 dark:border-white dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            Download Resume
            <Image src={assets.download_icon} alt="" width={16} height={16} />
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  )
}