import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface AudioContextType {
  isPlaying: boolean;
  toggleAudio: () => void;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}
