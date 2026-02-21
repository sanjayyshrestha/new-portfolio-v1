import { Project, Experience } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'Education', href: '#education' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Neon Nexus',
    category: 'Web Application',
    description: 'A futuristic dashboard visualization using D3.js and WebGL.',
    image: 'https://picsum.photos/800/600?random=1',
    tech: ['React', 'Three.js', 'D3'],
  },
  {
    id: 2,
    title: 'Aether Commerce',
    category: 'E-Commerce',
    description: 'Headless e-commerce platform with 3D product previews.',
    image: 'https://picsum.photos/800/600?random=2',
    tech: ['Next.js', 'Shopify', 'Tailwind'],
  },
  {
    id: 3,
    title: 'Quantum Chat',
    category: 'Communication',
    description: 'Real-time encrypted messaging app with AI translation.',
    image: 'https://picsum.photos/800/600?random=3',
    tech: ['Socket.io', 'TypeScript', 'Redis'],
  },
  {
    id: 4,
    title: 'Void Architect',
    category: 'Design Tool',
    description: 'Browser-based architectural visualization tool.',
    image: 'https://picsum.photos/800/600?random=4',
    tech: ['WebGL', 'Rust', 'WASM'],
  },
];
// Specific Education Data
export const EDUCATION_LIST = [
{
  id: 1,
  degree: 'Bachelor in Information Technology',
  institution: 'Tribhuvan University',
  period: '2025-2029',
  description: 'A curious and dedicated Computer Science student with a genuine passion for learning and growth. Continuously building strong foundations in core concepts while actively keeping up with evolving technology trends. Committed to improving problem-solving skills and contributing meaningfully through consistent effort and curiosity.'
},

  {
    id: 2,
    degree: '+2 Science,Computer Science',
    institution: 'Kathmandu Model College',
    period: '2023 - 2025',
    description: 'Focused on computer science fundamentals and applied science coursework.',
  },
  {
    id: 3,
    degree: 'SEE',
    institution: 'Kathmandu International School',
    period: '2017-2022',
    description: 'Completed secondary education with a general academic curriculum.',
  }
];
