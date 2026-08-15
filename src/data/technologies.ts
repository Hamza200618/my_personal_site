import type { TechnologyCategory } from '@/types';

/** Technology stack organized into premium categories. */
export const TECHNOLOGY_CATEGORIES: TechnologyCategory[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Building intelligent systems with modern AI frameworks and models.',
    icon: 'cpu',
    technologies: [
      'Python',
      'Claude AI',
      'Groq',
      'Prompt Engineering',
      'Machine Learning',
      'NLP',
      'OCR',
      'scikit-learn',
      'TensorFlow',
      'PyTorch',
      'Sentence Transformers',
      'spaCy',
      'NLTK',
    ],
  },
  {
    title: 'Backend Development',
    description: 'Robust server-side architecture and secure API design.',
    icon: 'server',
    technologies: [
      'Flask',
      'REST APIs',
      'Authentication',
      'JWT',
      'SQLAlchemy',
      'API Development',
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Modern, responsive interfaces with a focus on user experience.',
    icon: 'layout',
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'Responsive Design',
    ],
  },
  {
    title: 'Database',
    description: 'Designing and managing reliable relational data systems.',
    icon: 'database',
    technologies: [
      'MySQL',
      'SQL Server',
      'Database Design',
      'Relational Databases',
    ],
  },
  {
    title: 'Cloud & Deployment',
    description: 'Shipping and scaling applications with modern cloud platforms.',
    icon: 'cloud',
    technologies: [
      'Render',
      'Vercel',
      'GitHub',
      'GitHub Actions',
      'Firebase (Future)',
      'Azure (Learning)',
    ],
  },
  {
    title: 'Developer Tools',
    description: 'The tools that keep my workflow fast, clean, and efficient.',
    icon: 'wrench',
    technologies: [
      'VS Code',
      'Git',
      'GitHub Desktop',
      'Postman',
      'Figma (Basic)',
    ],
  },
];