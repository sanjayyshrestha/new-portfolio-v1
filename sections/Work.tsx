import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 px-4 md:px-20 bg-light dark:bg-dark relative z-20 transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-300 dark:border-gray-800 pb-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-black dark:text-white">SELECTED<br/>WORKS</h2>
            <span className="font-mono text-xs md:text-sm text-gray-500 mb-1 mt-4 md:mt-0">(2020 — 2024)</span>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative border-b border-gray-200 dark:border-gray-800 py-12 md:py-16 cursor-pointer"
            >
              <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 items-baseline relative z-10 text-black dark:text-white group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors duration-500">
                
                {/* Index Number */}
                <div className="md:col-span-1 font-mono text-xs text-gray-400 mb-2 md:mb-0 group-hover:text-indigo-500 transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* Title */}
                <div className="md:col-span-7">
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {project.title}
                  </h3>
                </div>
                
                {/* Metadata */}
                <div className="md:col-span-4 flex flex-row md:flex-col md:items-end justify-between w-full gap-2 mt-2 md:mt-0">
                   <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">
                     {project.category}
                   </span>
                   <div className="flex flex-wrap gap-2">
                     {project.tech.map((t, i) => (
                       <span key={i} className="font-mono text-[9px] md:text-[10px] border border-gray-300 dark:border-gray-700 px-2 py-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity">
                         {t}
                       </span>
                     ))}
                   </div>
                </div>
              </div>

              {/* Floating Image Reveal */}
              <motion.div 
                className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[400px] aspect-video opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out pointer-events-none z-20 overflow-hidden rounded-sm shadow-2xl"
                style={{ rotate: Math.random() * 4 - 2 }}
              >
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-mono text-xs tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all uppercase text-black dark:text-white">
                View All Projects
            </button>
        </div>
      </div>
    </section>
  );
};

export default Work;