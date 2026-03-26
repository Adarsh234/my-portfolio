'use client'
import { personalInfo } from '@/data'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import Image from 'next/image'
import { MagneticWrapper } from './ui/MagneticWrapper'

const Hero = () => {
  const handleScroll = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden z-0">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Glassmorphic Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs sm:text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-500/10 dark:bg-indigo-900/20 border border-indigo-500/20 dark:border-indigo-400/20 backdrop-blur-md rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Available for Hire
          </motion.span>

          {/* Main Typography */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-800 dark:text-slate-100 leading-tight tracking-tight mb-4">
            Hi, I&apos;m <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
              {personalInfo.name}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6 max-w-2xl">
            {personalInfo.role}
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg mb-10 max-w-lg leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Action Buttons & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start w-full sm:w-auto"
          >
            <div className="cursor-none">
              <MagicButton
                title="View Projects"
                icon={<FaLocationArrow />}
                position="right"
                handleClick={handleScroll}
              />
            </div>

            {/* Glassmorphic Social Pill */}
            <div className="flex items-center gap-2 p-2 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-full shadow-sm cursor-none">
              <MagneticWrapper>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-white dark:hover:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 cursor-none"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} className="pointer-events-none" />
                </a>
              </MagneticWrapper>

              <div className="w-[1px] h-5 bg-slate-300 dark:bg-slate-700"></div>

              <MagneticWrapper>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-white dark:hover:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 cursor-none"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} className="pointer-events-none" />
                </a>
              </MagneticWrapper>
            </div>
          </motion.div>
        </motion.div>

        {/* IMAGE VISUALS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: 'spring',
            stiffness: 100,
          }}
          className="order-1 lg:order-2 flex justify-center items-center w-full"
        >
          {/* Responsive container size */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
            {/* Outer Rotating Glowing Ring */}
            <div className="absolute inset-0 rounded-full border border-indigo-500/30 dark:border-indigo-400/20 shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)] animate-[spin_15s_linear_infinite]" />
            <div className="absolute inset-[-10px] rounded-full border border-dashed border-purple-500/20 dark:border-purple-400/20 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Inner Image Container (ParallaxWrapper removed) */}
            <div className="absolute inset-4 z-10 w-auto h-auto rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-900 shadow-2xl">
              <Image
                src="/profile-pic.jpeg"
                fill
                priority
                className="object-cover transform hover:scale-105 transition-transform duration-700 cursor-none"
                alt={`${personalInfo.name} Profile`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
