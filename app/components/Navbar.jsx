"use client"

import { assets } from "@/assets/assets"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "Home", id: "top" },
  { label: "About Me", id: "about" },
  { label: "Services", id: "services" },
  { label: "My Work", id: "work" },
  { label: "Contact Me", id: "contact" },
]

const Navbar = ({ isDark, setIsDark }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("top")

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "top")
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    )

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Background Decoration */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-4/5 dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" priority />
      </div>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 ${ isScroll ? "bg-white/60 backdrop-blur-2xl shadow-[0_2px_30px_rgba(0,0,0,0.06)] dark:bg-darkTheme/70 dark:shadow-[0_2px_30px_rgba(0,0,0,0.3)]" : "" }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={isDark ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-8 rounded-full px-12 py-3 transition-all duration-500 ${ !isScroll ? "bg-white/60 shadow-[0_2px_20px_rgba(0,0,0,0.06)] backdrop-blur-lg dark:border dark:border-white/20 dark:bg-white/5 dark:shadow-none" : "" }`}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                className={`font-ovo relative group transition-colors duration-300 ${activeSection === item.id ? "text-accent" : "hover:text-accent/80" }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-accent transition-all duration-300 ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(prev => !prev)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-lightHover dark:hover:bg-darkHover transition-all duration-300"
          >
            <Image
              src={isDark ? assets.sun_icon : assets.moon_icon}
              alt="Theme"
              className="w-5 transition-transform duration-500 hover:rotate-45"
            />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-400 rounded-full font-ovo dark:border-white/30 hover:bg-linear-to-r hover:from-accent hover:to-accentSoft hover:text-white hover:border-transparent dark:hover:border-transparent transition-all duration-500"
          >
            Contact
            <Image
              src={isDark ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt=""
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-lightHover dark:hover:bg-darkHover transition-all duration-300"
            onClick={() => setMenuOpen(true)}
          >
            <Image
              src={isDark ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay + Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Slide Menu */}
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 w-72 h-screen bg-white/90 backdrop-blur-xl dark:bg-darkSurface/95 dark:text-white z-50 flex flex-col gap-2 py-20 px-8 shadow-[-10px_0_40px_rgba(0,0,0,0.1)]"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute right-6 top-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-lightHover dark:hover:bg-darkHover transition"
              >
                <Image
                  src={isDark ? assets.close_white : assets.close_black}
                  alt=""
                  className="w-4"
                />
              </button>

              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`font-ovo text-lg px-4 py-3 rounded-xl transition-all duration-300 ${activeSection === item.id ? "text-accent bg-accent/5 dark:bg-accent/10 translate-x-1" : "hover:translate-x-2 hover:text-accent hover:bg-lightHover dark:hover:bg-darkHover" }`}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar