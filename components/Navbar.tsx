'use client'
import { useState, useEffect } from 'react'
import { navItems } from '@/data'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detect scroll to add shadow/shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center w-full mt-4 px-4 sm:px-6">
      <nav
        className={`relative w-full max-w-5xl transition-all duration-300 ease-in-out rounded-full border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-xl
        ${
          scrolled
            ? 'bg-white/70 dark:bg-slate-950/70 shadow-lg py-3 px-6'
            : 'bg-white/40 dark:bg-slate-900/40 py-4 px-6'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight"
          >
            Adarsh<span className="text-indigo-500">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="relative text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors group"
              >
                {item.name}
                {/* Hover Underline Animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
            <div className="h-6 w-[1px] bg-slate-300 dark:bg-slate-700 mx-2"></div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 dark:text-slate-100 focus:outline-none p-2 rounded-full bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown (Animated) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="absolute top-full left-0 w-full mt-4 p-4 rounded-3xl bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl md:hidden flex flex-col gap-2 overflow-hidden"
            >
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 px-4 py-3 text-base font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-2xl transition-all"
                  >
                    {item.icon && (
                      <item.icon className="text-indigo-500 opacity-70" />
                    )}
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}

export default Navbar
