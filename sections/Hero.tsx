
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Animation variants for the "Reveal" effect (sliding text up)
  const textReveal = {
    hidden: { y: '100%' },
    visible: (i: number) => ({
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 1.0,
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
      },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 1.0, duration: 0.8 },
    }),
  };

  const techStack = [
    { name: 'Docker / K8s', status: 'online', load: '98%' },
    { name: 'AWS Infra', status: 'online', load: '100%' },
    { name: 'AI Model', status: 'processing', load: '45%' },
    { name: 'React / Next', status: 'online', load: '100%' },
  ];

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-32 pb-32 md:py-32 overflow-hidden z-10 pointer-events-none">
      

      <div className="w-full max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">
        
        {/* Left Content: Typography & Bio */}
        <div className="lg:col-span-7 flex flex-col justify-center pointer-events-auto">
          
          {/* Greeting Tag - Perfectly aligned */}
          <div className="overflow-hidden mb-6">
            <motion.div
              custom={0}
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3"
            >
              <span className="font-mono text-cyan-600 dark:text-cyan-400 text-sm md:text-base tracking-[0.2em] uppercase font-bold">
                Hello, I am Sanjay
              </span>
              <div className="h-[1px] flex-1 max-w-[60px] bg-cyan-600 dark:bg-cyan-400" />
            </motion.div>
          </div>

          {/* Main Headline - Updated Text & Gradient */}
          <div className="relative z-10 mb-6 md:mb-8 leading-none">
             {/* Line 1 */}
            <div className="overflow-hidden">
              <motion.h1 
                custom={1}
                variants={textReveal}
                initial="hidden"
                animate="visible"
                className="text-[13vw] md:text-[8vw] lg:text-[4rem] xl:text-[5.5rem] font-bold tracking-tighter text-slate-900 dark:text-white leading-[0.9] -ml-[0.05em]"
              >
                FULL STACK
              </motion.h1>
            </div>
            
            {/* Line 2 */}
            <div className="overflow-hidden">
               <motion.div 
                custom={2}
                variants={textReveal}
                initial="hidden"
                animate="visible"
                className="flex items-center"
              >
                <h1 className="text-[13vw] md:text-[8vw] lg:text-[4rem] xl:text-[5.5rem] font-bold tracking-tighter leading-[0.9] -ml-[0.05em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 animate-gradient-x bg-[length:200%_200%] pb-2">
                  ENGINEER
                </h1>
              </motion.div>
            </div>
          </div>

          {/* Sub-headline / Roles - Elegant Text */}
          <motion.div 
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center flex-wrap gap-3 mb-8 font-mono text-base md:text-xl text-slate-600 dark:text-slate-300"
          >
            <span>DevOps</span>
            <span className="text-cyan-500">•</span>
            <span>AI/ML</span>
            <span className="text-indigo-500">•</span>
            <span>Cloud Architecture</span>
          </motion.div>

          {/* Bio Description */}
          <motion.p 
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-10"
          >
            Architecting robust digital ecosystems. I merge scalable backend infrastructure with intelligent AI solutions to build systems that perform under pressure.
          </motion.p>

          {/* CTAs - Stacked on mobile, row on desktop - No Overlap */}
          <motion.div 
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-4"
          >
            <a 
              href="#work" 
              className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-mono text-xs uppercase font-bold tracking-widest overflow-hidden w-full sm:w-auto text-center hover:shadow-lg transition-all"
            >
              <div className="absolute inset-0 bg-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 group-hover:text-white transition-colors flex items-center justify-center gap-2">
                View Projects
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
              </span>
            </a>
            
            <a 
              href="#contact"
              className="px-8 py-4 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-full font-mono text-xs uppercase font-bold tracking-widest hover:border-cyan-500 hover:text-cyan-500 transition-colors w-full sm:w-auto text-center bg-white/40 dark:bg-black/40 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Content: Tech Dashboard (Widget) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col items-end justify-center h-full z-10 pointer-events-none">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="relative pointer-events-auto"
          >
             {/* Decorative Lines */}
             <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-cyan-500/20 rounded-tr-3xl" />
             <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-indigo-500/20 rounded-bl-3xl" />

            {/* Card */}
            <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-6 rounded-2xl w-80 shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex flex-col">
                   <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">System Status</span>
                   <span className="font-bold text-sm text-slate-800 dark:text-white font-mono">PRODUCTION_V2</span>
                </div>
                <div className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
              </div>

              <div className="space-y-4">
                {techStack.map((tech, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center justify-between font-mono text-[10px] mb-1.5">
                       <span className="text-slate-600 dark:text-slate-300 font-medium">{tech.name}</span>
                       <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                           tech.status === 'online' 
                           ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' 
                           : 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
                       }`}>
                           {tech.status.toUpperCase()}
                       </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: tech.load }}
                           transition={{ duration: 1.5, delay: 2.2 + i * 0.2 }}
                           className={`h-full rounded-full ${tech.status === 'online' ? 'bg-cyan-500' : 'bg-amber-500'}`}
                        />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center font-mono text-[9px] text-slate-400 uppercase tracking-wider">
                 <span>Latency: 12ms</span>
                 <span>Uptime: 99.99%</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Indicator */}
       <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-6 md:left-20 flex items-center gap-4 pointer-events-auto hidden md:flex"
        >
           <div className="h-[1px] w-12 bg-slate-300 dark:bg-slate-700" />
           <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
             Scroll to explore
           </span>
        </motion.div>

    </section>
  );
};

export default Hero;
