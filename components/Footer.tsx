'use client'
import { personalInfo } from '@/data'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa'
import Link from 'next/link'
import { MagneticWrapper } from './ui/MagneticWrapper'
// 1. IMPORT CYBERTEXT
import { CyberText } from './ui/CyberText'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-20 pb-10 mt-20 overflow-hidden border-t border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-950/30 backdrop-blur-2xl z-10">
      {/* 🧹 Removed the large static aurora blur so the 3D sparkles can reach the bottom of the page */}

      {/* Decorative Top Border Glow (Kept this as it looks sleek!) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        {/* Top Section: Brand & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight cursor-none inline-block hover:scale-105 transition-transform duration-300"
            >
              Adarsh<span className="text-indigo-500">.</span>
            </Link>
            <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-sm text-sm leading-relaxed cursor-none">
              Bridging the gap between robust software engineering and secure
              digital infrastructures.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end gap-4 cursor-none">
            {/* 2. ADDED CYBERTEXT TO THE CONNECT HEADING */}
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex font-mono cursor-none">
              <CyberText text="Connect" delay={0.1} />
            </p>

            <div className="flex gap-4">
              {[
                {
                  icon: FaGithub,
                  href: personalInfo.socials.github,
                  label: 'GitHub',
                },
                {
                  icon: FaLinkedin,
                  href: personalInfo.socials.linkedin,
                  label: 'LinkedIn',
                },
                {
                  icon: FaTwitter,
                  href: personalInfo.socials.twitter,
                  label: 'Twitter',
                },
              ].map((social, index) => (
                <MagneticWrapper key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-indigo-500/25 cursor-none"
                  >
                    <social.icon size={18} className="pointer-events-none" />
                  </a>
                </MagneticWrapper>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-left cursor-none">
            © {new Date().getFullYear()}{' '}
            <span className="text-indigo-500 font-semibold cursor-none">
              {personalInfo.name}
            </span>
            . All rights reserved.
          </p>

          <MagneticWrapper>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-5 py-2.5 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white hover:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-indigo-500/25 cursor-none"
              aria-label="Back to Top"
            >
              <span className="text-sm font-medium cursor-none">
                Back to top
              </span>
              <FaArrowUp
                className="transform group-hover:-translate-y-1 transition-transform duration-300 cursor-none pointer-events-none"
                size={12}
              />
            </button>
          </MagneticWrapper>
        </div>
      </div>
    </footer>
  )
}

export default Footer
