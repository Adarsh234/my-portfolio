'use client'
import { projects } from '@/data'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Card } from './ui/Card'
import Image from 'next/image'

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-16">
          Featured <span className="text-indigo-500">Work</span>
        </h2>

        {/* MAGIC HAPPENS HERE: 
            1. 'group/projects' creates a scope for the hover effect.
            2. 'hover:has-[:hover]:...' checks if a child is being hovered.
        */}
        <div className="group/projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              // CSS LOGIC EXPLAINED:
              // 1. group-hover/projects:blur-sm -> When mouse enters the GRID, blur THIS card.
              // 2. group-hover/projects:scale-[0.98] -> Shrink slightly when grid is hovered.
              // 3. hover:!blur-none -> BUT, if mouse is on THIS card, force remove blur.
              // 4. hover:!scale-105 -> And scale THIS card up.
              // 5. hover:!opacity-100 -> Keep full opacity.
              // 6. z-0 hover:z-10 -> Bring hovered card to front.
              className="
                transition-all duration-500 ease-out
                group-hover/projects:blur-sm group-hover/projects:scale-[0.95] group-hover/projects:opacity-50
                hover:!blur-none hover:!scale-105 hover:!opacity-100 hover:z-10 shadow-lg
              "
            >
              <Card className="h-full flex flex-col overflow-hidden group/card border-slate-200 dark:border-slate-800">
                {/* Image Section */}
                <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                    <Image src={project.image} fill alt="Project Image" />
                    {/* Note: Added scaling to the image itself when card is hovered */}
                    {/* <span className="transition-transform duration-500 group-hover/card:scale-110">
                      {project.title} Preview
                    </span> */}
                  </div>

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-slate-900 rounded-full hover:bg-indigo-50 transition-colors transform hover:scale-110"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-slate-900 rounded-full hover:bg-indigo-50 transition-colors transform hover:scale-110"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow bg-white dark:bg-slate-950">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.des}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded border border-indigo-100 dark:border-indigo-900/30"
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
