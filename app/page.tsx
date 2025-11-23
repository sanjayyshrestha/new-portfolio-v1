'use client'
import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import Controls from '@/components/Controls';
import Loading from '@/components/Loading';
import Room3D from '@/components/Room3D';
import Work from '@/sections/Work';
import Hero from '@/sections/Hero';
import Education from '@/sections/Education';
import About from '@/sections/About';
import Contact from '@/sections/Contact';


const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Theme handling
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Audio Autoplay handling
  useEffect(() => {
    const attemptAutoplay = async () => {
        if (audioRef.current && !loading) {
            audioRef.current.volume = 0.2; // Subtle background volume
            try {
                await audioRef.current.play();
                setAudioPlaying(true);
            } catch (e) {
                console.log("Autoplay blocked by browser policy:", e);
                setAudioPlaying(false);
            }
        }
    };
    attemptAutoplay();
  }, [loading]);

  // Audio Toggle handling
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (audioPlaying) {
      audioRef.current.play().catch(() => setAudioPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [audioPlaying]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleAudio = () => setAudioPlaying(!audioPlaying);

  return (
    <>
      <audio 
        ref={audioRef} 
        loop 
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3" 
      />

      <AnimatePresence mode="wait">
        {loading && <Loading key="loading-screen" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <Layout>
          <Controls
            isDark={isDark} 
            toggleTheme={toggleTheme} 
            isPlaying={audioPlaying}
            toggleAudio={toggleAudio}
          />

          <div className="w-full relative">
            {/* 3D Background */}
            <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000">
              <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
                <Suspense fallback={null}>
                  <Room3D isDark={isDark} />
                </Suspense>
              </Canvas>
            </div>

            {/* Scrollable Content */}
            <div className="relative z-10 w-full overflow-x-hidden">
                 <Hero />
                 <div className="bg-light dark:bg-dark transition-colors duration-500 relative shadow-2xl">
                    <Work />
                    <Education />
                    <About />
                    <Contact />
                 </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default App;