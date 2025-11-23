import React from 'react';
import { motion } from 'framer-motion';

interface ControlsProps {
  isDark: boolean;
  toggleTheme: () => void;
  isPlaying: boolean;
  toggleAudio: () => void;
}

const Controls: React.FC<ControlsProps> = ({ isDark, toggleTheme, isPlaying, toggleAudio }) => {
  // Create realistic mechanical switch sound
  const playSwitchSound = (isOn: boolean) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create white noise for the mechanical click
    const bufferSize = audioContext.sampleRate * 0.05; // 50ms
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    // Generate noise with decay
    for (let i = 0; i < bufferSize; i++) {
      const decay = 1 - (i / bufferSize);
      data[i] = (Math.random() * 2 - 1) * decay * 0.3;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    // Band-pass filter for mechanical click sound
    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = isOn ? 2500 : 1800; // Higher pitch for ON, lower for OFF
    filter.Q.value = 5;
    
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
    
    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    noise.start(audioContext.currentTime);
    noise.stop(audioContext.currentTime + 0.05);
  };

  const handleThemeToggle = () => {
    playSwitchSound(!isDark);
    toggleTheme();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-40 flex flex-col gap-4"
    >
      {/* Theme Toggle */}
      <button
        onClick={handleThemeToggle}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-panel flex items-center justify-center text-gray-800 dark:text-white hover:scale-110 transition-transform duration-300 group bg-white/50 dark:bg-black/50 backdrop-blur-sm"
        aria-label="Toggle Theme"
      >
        <div className={`relative w-5 h-5 md:w-6 md:h-6 transition-all duration-500 ${isDark ? 'shadow-glow' : ''}`}>
           <svg 
             xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24" 
             fill="none" 
             stroke="currentColor" 
             strokeWidth="2" 
             strokeLinecap="round" 
             strokeLinejoin="round"
             className={`w-full h-full transition-colors ${isDark ? 'fill-yellow-400 stroke-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]' : 'stroke-gray-600'}`}
            >
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M12 2a7 7 0 0 0-7 7c0 3.8 2.5 6.4 3.5 7.5.2.2.5.5.5.5h6s.3-.3.5-.5c1-1.1 3.5-3.7 3.5-7.5a7 7 0 0 0-7-7z" />
           </svg>
        </div>
      </button>

      {/* Music Toggle */}
      <button
        onClick={toggleAudio}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-panel flex items-center justify-center text-gray-800 dark:text-white hover:scale-110 transition-transform duration-300 overflow-hidden bg-white/50 dark:bg-black/50 backdrop-blur-sm"
        aria-label="Toggle Music"
      >
        <div className="flex items-end gap-0.5 md:gap-1 h-3 md:h-4">
            {[1, 2, 3].map((bar) => (
                <motion.div
                    key={bar}
                    className={`w-0.5 md:w-1 bg-current ${isPlaying ? 'bg-indigo-500' : 'bg-gray-400'}`}
                    animate={{ 
                        height: isPlaying ? [4, 12, 6, 10, 4] : 4 
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: bar * 0.1
                    }}
                />
            ))}
        </div>
      </button>
    </motion.div>
  );
};

export default Controls;