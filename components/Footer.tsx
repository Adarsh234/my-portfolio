'use client'
import { personalInfo } from '@/data'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white dark:bg-slate-950 py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()}{' '}
            <span className="text-indigo-500 font-semibold">
              {personalInfo.name}
            </span>
            . All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            className="text-slate-500 hover:text-indigo-500 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            className="text-slate-500 hover:text-indigo-500 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={personalInfo.socials.twitter}
            target="_blank"
            className="text-slate-500 hover:text-indigo-500 transition-colors"
          >
            <FaTwitter size={20} />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  )
}

export default Footer
