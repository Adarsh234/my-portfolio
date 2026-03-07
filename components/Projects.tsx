'use client'
import { projects } from '@/data'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Card } from './ui/Card'
import Image from 'next/image'

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden z-0">
      {/* 🔮 Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[400px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight mb-4">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                Work
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 opacity-80"></div>

            <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              A selection of my recent projects, showcasing my expertise in
              building scalable applications and secure systems.
            </p>
          </motion.div>
        </div>

        <div className="group/projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              // FIXED: Single line className to prevent hydration mismatch
              className="relative transition-all duration-500 ease-out group-hover/projects:blur-sm group-hover/projects:scale-[0.96] group-hover/projects:opacity-60 hover:!blur-none hover:!scale-[1.03] hover:!opacity-100 hover:z-10"
            >
              {/* Glassmorphic Card */}
              <Card className="h-full flex flex-col overflow-hidden group/card bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/50 dark:hover:border-purple-500/50 transition-colors duration-500 shadow-lg">
                {/* Subtle inner card gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                {/* Image Section */}
                <div className="relative h-56 bg-slate-100 dark:bg-slate-800 overflow-hidden z-10">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium bg-slate-200 dark:bg-slate-800">
                    <Image
                      src={project.image}
                      fill
                      alt={project.title}
                      className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                    />
                  </div>

                  {/* Overlay & Action Buttons */}
                  <div className="absolute inset-0 bg-indigo-950/60 dark:bg-slate-950/70 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-5 backdrop-blur-sm z-20">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-slate-900 dark:text-slate-100 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-indigo-500/40"
                      aria-label="View Source Code"
                    >
                      <FaGithub size={22} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-slate-900 dark:text-slate-100 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-indigo-500/40"
                      aria-label="View Live Project"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-6 flex flex-col flex-grow z-10">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover/card:text-indigo-600 dark:group-hover/card:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.des}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold tracking-wide text-indigo-600 dark:text-indigo-300 bg-indigo-500/10 dark:bg-indigo-500/20 px-3 py-1.5 rounded-full border border-indigo-500/20 dark:border-indigo-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
