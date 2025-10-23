import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'AI Music Generator',
    description: 'Machine learning model that generates original music compositions based on user preferences and mood.',
    techStack: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    image: '/projects/ai-music.jpg',
    links: [
      { type: 'live', url: 'https://example.com', label: 'View Live' },
      { type: 'code', url: 'https://github.com', label: 'View Code' },
    ],
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio showcasing music and technical projects with interactive animations.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/projects/portfolio.jpg',
    links: [
      { type: 'code', url: 'https://github.com', label: 'View Code' },
    ],
  },
  {
    id: '3',
    title: 'Sound Visualizer',
    description: 'Real-time audio visualization tool with customizable effects and export capabilities.',
    techStack: ['JavaScript', 'Web Audio API', 'Canvas', 'Three.js'],
    image: '/projects/visualizer.jpg',
    links: [
      { type: 'live', url: 'https://example.com', label: 'Try Demo' },
      { type: 'code', url: 'https://github.com', label: 'View Code' },
    ],
  },
  {
    id: '4',
    title: 'Music Collaboration Platform',
    description: 'Web platform enabling musicians to collaborate remotely with real-time audio streaming.',
    techStack: ['Node.js', 'WebRTC', 'Socket.io', 'Vue.js'],
    image: '/projects/collab.jpg',
    links: [
      { type: 'live', url: 'https://example.com', label: 'View Live' },
    ],
  },
];
