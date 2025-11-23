import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingProps {
  onComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Wait a bit after 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl font-mono font-bold mb-4 tracking-tighter">
          HELLO WORLD
        </h1>
        <p className="text-sm md:text-base text-gray-400 font-mono">
          INITIALIZING ENVIRONMENT
        </p>
      </motion.div>

      <div className="mt-12 w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative">
        <motion.div
          className="absolute top-0 left-0 h-full bg-white"
          style={{ width: `${Math.min(progress, 100)}%` }}
          layoutId="loader-bar"
        />
      </div>
      
      <span className="mt-2 font-mono text-xs">{Math.min(progress, 100)}%</span>
    </motion.div>
  );
};

export default Loading;