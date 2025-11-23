import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_LIST } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 px-4 md:px-12 lg:px-20 bg-white dark:bg-[#050505] relative z-20">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            {/* Left Column: Title */}
            <div className="md:w-1/3 sticky top-32 h-fit">
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-xs font-mono uppercase tracking-widest text-indigo-500 mb-4"
                >
                    Academic Background
                </motion.h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-black dark:text-white">
                    EDUCATION
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                   My academic foundation in Computer Science and Engineering has provided me with the theoretical tools to solve complex practical problems.
                </p>
            </div>

            {/* Right Column: The List */}
            <div className="md:w-2/3 relative">
                {/* Vertical Line */}
                <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-gray-200 dark:bg-gray-800 hidden md:block" />

                {EDUCATION_LIST.map((item, index) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-0 md:pl-12 pb-16 last:pb-0"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500 hidden md:block ring-4 ring-white dark:ring-[#050505]" />

                        <div className="flex flex-col gap-2">
                            <span className="inline-block w-fit px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 font-mono text-[10px] font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                                {item.period}
                            </span>
                            <h4 className="text-2xl font-bold text-black dark:text-white">{item.degree}</h4>
                            <div className="text-base font-medium text-gray-800 dark:text-gray-200 mb-2">{item.institution}</div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-lg">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
