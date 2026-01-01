'use client'
import { services } from '@/data'
import { motion } from 'framer-motion'
import { Card } from './ui/Card'
import { FaCheckCircle } from 'react-icons/fa'

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
            My <span className="text-indigo-500">Services</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Providing high-quality solutions from frontend interfaces to secure
            backend systems.
          </p>
        </div>

        {/* GROUP LOGIC:
           1. group/services: Acts as the container for the spotlight effect.
        */}
        <div className="group/services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              // FOCUS & BLUR LOGIC:
              // group-hover/services:blur-sm -> Blur me if anyone in the grid is hovered
              // hover:!blur-none -> BUT remove blur if I am the one being hovered
              className="
                relative transition-all duration-500 ease-out
                group-hover/services:blur-sm group-hover/services:scale-[0.95] group-hover/services:opacity-60
                hover:!blur-none hover:!scale-110 hover:!opacity-100 hover:z-10
              "
            >
              <Card className="p-8 h-full flex flex-col justify-between overflow-hidden group/card border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                {/* Icon & Main Info */}
                <div>
                  <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover/card:bg-indigo-600 group-hover/card:text-white transition-colors duration-300">
                    <service.icon />
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover/card:text-indigo-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>

                {/* HIDDEN DETAIL SECTION 
                    - max-h-0: Hidden by default
                    - group-hover/card:max-h-40: Expands on hover
                */}
                <div className="max-h-0 opacity-0 group-hover/card:max-h-60 group-hover/card:opacity-100 transition-all duration-500 ease-in-out overflow-hidden border-t border-slate-100 dark:border-slate-800/50 mt-2 pt-0 group-hover/card:pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Included Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300"
                      >
                        <FaCheckCircle className="text-indigo-500 text-[10px]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
