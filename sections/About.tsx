
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  // Grouped skills for better engineering readability
  const skillCategories = [
    {
      title: "Backend & Core",
      skills: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Nginx"]
    },
    {
      title: "Frontend & UI",
      skills: ["React", "Next.js", "TypeScript", "Three.js", "Tailwind"]
    },
    {
      title: "AI & Data",
      skills: ["TensorFlow", "PyTorch", "OpenAI API", "Pandas", "RAG"]
    }
  ];

  return (
    <section id="about" className="py-32 px-4 md:px-12 lg:px-20 bg-light dark:bg-dark relative z-20 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto max-w-[90rem]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-200 dark:border-gray-800 pb-8">
             <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-black dark:text-white">
                ABOUT
            </h2>
            <div className="flex flex-col items-end">
                 <span className="font-mono text-xs text-gray-500 mb-2 block uppercase tracking-widest">
                  THE HUMAN BEHIND THE CODE
                </span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left Column: Image (Static) */}
             <div className="lg:col-span-5 order-2 lg:order-1">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-[3/4] bg-gray-100 dark:bg-gray-900 rounded-sm overflow-hidden group"
                >
                    {/* Static Profile Image */}
                    <img 
                        src="/mee.jpg" 
                        alt="Sanjay Shrestha" 
                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                    />
                    
                    {/* Technical Overlays */}
                    {/* <div className="absolute inset-0 border border-black/10 dark:border-white/10 pointer-events-none" />
                    <div className="absolute top-0 left-0 bg-indigo-500 text-white text-[10px] font-mono px-2 py-1">
                      IMG_REF: 0421
                    </div> */}
                </motion.div>

                {/* Technical Stack List */}
                <div className="mt-12 space-y-8">
                    {skillCategories.map((cat, idx) => (
                      <div key={idx}>
                         <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2 w-full">
                           {cat.title}
                         </h4>
                         <div className="flex flex-wrap gap-x-3 gap-y-2">
                           {cat.skills.map((skill, i) => (
                             <span 
                               key={i}
                               className="font-mono text-xs text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition-colors cursor-default"
                             >
                               {skill} <span className="text-gray-300 dark:text-gray-700">/</span>
                             </span>
                           ))}
                         </div>
                      </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-10 pt-4 lg:pt-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl md:text-4xl lg:text-5xl leading-[1.1] font-medium text-gray-900 dark:text-white mb-8">
                        "Good software is like a suspension bridge: <span className="text-gray-400 dark:text-gray-600">Built to handle load,</span> resilient to stress, and <span className="text-indigo-500">invisible when working perfectly.</span>"
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-8 text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed font-sans">
                        <p>
                            I am a Full Stack Engineer with a specialization in DevOps and Backend Architecture. While I appreciate beautiful UI, my true expertise lies in what happens under the hood. I focus on creating systems that are scalable, maintainable, and secure.
                        </p>
                        <p>
                            My workflow integrates modern CI/CD practices with AI-driven enhancements to optimize performance and developer velocity. Whether it's orchestrating Kubernetes clusters or fine-tuning a machine learning model for a web app, I bring an engineering-first mindset to every project.
                        </p>
                    </div>
                </motion.div>

                {/* Info Grid */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-800"
                >
                    <div>
                        <span className="block font-mono text-xs text-gray-400 uppercase mb-1">Location</span>
                        <span className="text-base text-black dark:text-white font-medium">Kathmandu, Nepal</span>
                    </div>
                    <div>
                        <span className="block font-mono text-xs text-gray-400 uppercase mb-1">Experience</span>
                        <span className="text-base text-black dark:text-white font-medium">1+ Years</span>
                    </div>
                    <div>
                        <span className="block font-mono text-xs text-gray-400 uppercase mb-1">Availability</span>
                        <span className="text-base text-green-600 dark:text-green-400 font-medium">Open for Projects</span>
                    </div>
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;
