import React, { ReactNode } from 'react';
import Navbar from './Navbar';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen font-sans transition-colors duration-500 bg-light dark:bg-dark text-dark dark:text-light selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="relative z-10 flex flex-col">
        {children}
      </main>
      
      <footer className="relative z-10 py-10 text-center text-sm text-gray-500 font-mono">
        <p>© {new Date().getFullYear()} Sanjay Shrestha. Built with React, Three.js & Tailwind.</p>
      </footer>
    </div>
  );
};

export default Layout;