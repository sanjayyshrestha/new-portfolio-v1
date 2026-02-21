import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect for glass morphism & active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Logic to determine active section based on scroll position
      // Offset to trigger change slightly before the section hits the very top
      const offset = 200;

      let current = 'home';

      // Find the section that is currently active
      for (const link of NAV_LINKS) {
        const sectionId = link.href.substring(1);
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - offset;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            current = sectionId;
            break;
          }
        }
      }

      // Edge case: if we are at the very bottom, highlight the last one (usually Contact)
      if ((window.innerHeight + Math.round(scrollY)) >= document.body.offsetHeight) {
        current = NAV_LINKS[NAV_LINKS.length - 1].href.substring(1);
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.substring(1));
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="w-full flex items-center justify-between px-4 md:px-12 lg:px-20">

          {/* Brand Identity */}
          <div className="flex items-center gap-4 z-50">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="group flex flex-col"
            >
              <span className="font-mono text-lg md:text-xl font-bold tracking-tight text-black dark:text-white leading-none">
                SANJAY.
              </span>
              <span className="font-mono text-[10px] text-gray-500 tracking-widest group-hover:text-indigo-500 transition-colors">
                DEV PORTFOLIO
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Minimal & Clean */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative font-mono text-xs uppercase tracking-widest transition-colors py-2 group ${
                    isActive ? 'text-black dark:text-white font-bold' : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-indigo-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              );
            })}
          </nav>

          {/* Right Side - CTA / Status */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">Available for work</span>
            </div>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-widest hover:bg-indigo-600 dark:hover:bg-gray-200 transition-colors"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 w-10 h-10 flex flex-col gap-1.5 items-end justify-center group"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-black dark:bg-white block transition-transform origin-center"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-black dark:bg-white block transition-opacity group-hover:w-8"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-black dark:bg-white block transition-transform origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { scrollToSection(e, link.href); setIsMenuOpen(false); }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                    className={`text-5xl font-bold tracking-tighter transition-colors ${
                      isActive
                        ? 'text-indigo-500'
                        : 'text-black dark:text-white hover:text-indigo-500'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 text-center"
            >
              <p className="font-mono text-xs text-gray-500 mb-4">sanjayyshrestha772@gmail.com</p>
              <div className="flex gap-6 justify-center">
                {['TW', 'IN', 'GH'].map((social) => (
                  <span key={social} className="font-mono text-xs font-bold text-black dark:text-white">{social}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;