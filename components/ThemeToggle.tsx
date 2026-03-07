'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-indigo-500/50
      bg-white/60 border border-slate-200/50 hover:bg-white/80 shadow-sm hover:shadow-indigo-500/20
      dark:bg-indigo-950/40 dark:border-indigo-500/20 dark:hover:bg-indigo-900/60 dark:hover:border-indigo-400/40 dark:shadow-[0_0_15px_rgba(99,102,241,0.15)] dark:hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
      aria-label="Toggle Dark Mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="absolute flex items-center justify-center"
        >
          {theme === 'dark' ? (
            // Glowing Amber Sun for Dark Mode
            <FaSun
              size={18}
              className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"
            />
          ) : (
            // Sleek Indigo Moon for Light Mode
            <FaMoon
              size={18}
              className="text-indigo-600 drop-shadow-[0_0_8px_rgba(79,70,229,0.4)]"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggle
