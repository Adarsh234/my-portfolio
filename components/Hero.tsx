'use client'
import { personalInfo } from '@/data'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import Image from 'next/image'

const Hero = () => {
  const handleScroll = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-500 uppercase bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
            Available for Hire
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 leading-tight mb-4">
            Hi, I&apos;m{' '}
            <span className="text-indigo-500">{personalInfo.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6">
            {personalInfo.role}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <MagicButton
              title="View Projects"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={handleScroll}
            />

            <div className="flex gap-4">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
            <div className="absolute inset-0 bg-indigo-500/30 rounded-full blur-3xl animate-pulse scale-110" />
            <div className="relative w-80 h-80 md:w-[30rem] md:h-[30rem] rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-900/50 shadow-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center z-15">
              <Image
                src="/profile-pic.jpeg"
                fill
                // className="object"
                alt="Profile Image"
              />
              <span className="text-slate-400 font-medium">Profile Image</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
