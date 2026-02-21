import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-20 bg-light dark:bg-dark relative z-20 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-4xl">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">LET'S TALK</h2>
            <p className="font-mono text-sm text-gray-500">ESTIMATED RESPONSE TIME: 24 HOURS</p>
        </motion.div>

        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="group relative">
                <input 
                    type="text" 
                    placeholder="WHAT'S YOUR NAME?"
                    className="w-full bg-transparent text-2xl md:text-4xl py-4 border-b border-gray-300 dark:border-gray-700 focus:border-indigo-500 outline-none transition-colors placeholder:text-gray-300 dark:placeholder:text-gray-700"
                />
            </div>
            
            <div className="group relative">
                <input 
                    type="email" 
                    placeholder="YOUR EMAIL ADDRESS"
                    className="w-full bg-transparent text-2xl md:text-4xl py-4 border-b border-gray-300 dark:border-gray-700 focus:border-indigo-500 outline-none transition-colors placeholder:text-gray-300 dark:placeholder:text-gray-700"
                />
            </div>

            <div className="group relative">
                <textarea 
                    rows={1}
                    placeholder="TELL ME ABOUT YOUR PROJECT"
                    className="w-full bg-transparent text-2xl md:text-4xl py-4 border-b border-gray-300 dark:border-gray-700 focus:border-indigo-500 outline-none transition-colors placeholder:text-gray-300 dark:placeholder:text-gray-700 resize-none"
                />
            </div>

            <div className="flex justify-center pt-10">
                <button className="group relative px-12 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full overflow-hidden">
                    <div className="absolute inset-0 w-full h-full bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative font-mono font-bold tracking-widest text-sm z-10">SEND MESSAGE</span>
                </button>
            </div>
        </form>

        <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="font-mono text-xs text-gray-500">© {new Date().getFullYear()} SANJAY SHRESTHA</span>
            <div className="flex gap-8">
               {[
    { name: 'TWITTER', url: 'https://x.com/sanjayyshrestha' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/sanjayyshrestha7/' },
    { name: 'GITHUB', url: 'https://github.com/sanjayyshrestha' },
    { name: 'INSTAGRAM', url: 'https://instagram.com/yourusername' },
].map((social) => (
    <a 
        key={social.name} 
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs hover:text-indigo-500 transition-colors"
    >
        {social.name}
    </a>
))}

            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;