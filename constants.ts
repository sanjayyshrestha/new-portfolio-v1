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
  // {
  //   id: 1,
  //   degree: 'M.S. Computer Science',
  //   institution: 'Stanford University',
  //   period: '2020 - 2022',
  //   description: 'Specialization in Human-Computer Interaction (HCI) and Computer Graphics. Research focused on WebGL performance.',
  // },
  {
    id: 2,
    degree: '+2 Science,Computer Science',
    institution: 'Kathmandu Model College',
    period: '2023 - 2025',
    description: 'Graduated with Honors. Capstone project involved a distributed system for real-time data processing.',
  },
  {
    id: 3,
    degree: 'SEE',
    institution: 'Kathmandu International School',
    period: '2017-2022',
    description: 'Intensive coursework covering modern React patterns, Node.js architecture, and Cloud deployment strategies.',
  }
];
