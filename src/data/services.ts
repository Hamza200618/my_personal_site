import type { Service } from '@/types';

/** Service offerings — what I build. */
export const SERVICES: Service[] = [
  {
    title: 'AI Applications',
    description:
      'End-to-end AI-powered applications that bring intelligence into real workflows — from data processing to user-facing features.',
    icon: 'bot',
    technologies: ['Python', 'Claude AI', 'Groq', 'Machine Learning', 'NLP'],
    useCases: ['Intelligent document processing', 'AI-powered search', 'Smart automation'],
    featured: true,
  },
  {
    title: 'AI Agents',
    description:
      'Autonomous agents that reason, plan, and execute tasks using modern LLMs and tool-calling.',
    icon: 'brain',
    technologies: ['Claude AI', 'Groq', 'Prompt Engineering', 'Python'],
    useCases: ['Task automation', 'Research assistants', 'Workflow orchestration'],
  },
  {
    title: 'Chatbots',
    description:
      'Conversational AI assistants that understand context and deliver helpful, human-like responses.',
    icon: 'message',
    technologies: ['LLM Integration', 'NLP', 'Python', 'REST APIs'],
    useCases: ['Customer support', 'Knowledge assistants', 'Onboarding bots'],
  },
  {
    title: 'Full Stack Web Applications',
    description:
      'Complete web platforms from database to interface — designed, built, and deployed.',
    icon: 'globe',
    technologies: ['React', 'TypeScript', 'Flask', 'MySQL', 'Tailwind CSS'],
    useCases: ['SaaS platforms', 'Business dashboards', 'Web portals'],
  },
  {
    title: 'CRM Systems',
    description:
      'Customer relationship management systems that organize contacts, track interactions, and drive growth.',
    icon: 'users',
    technologies: ['React', 'Flask', 'MySQL', 'Authentication', 'JWT'],
    useCases: ['Sales pipelines', 'Customer tracking', 'Team collaboration'],
  },
  {
    title: 'Automation Solutions',
    description:
      'Custom automation that eliminates repetitive work and streamlines business operations.',
    icon: 'workflow',
    technologies: ['Python', 'REST APIs', 'Machine Learning', 'OCR'],
    useCases: ['Report generation', 'Data entry automation', 'Workflow triggers'],
  },
  {
    title: 'Machine Learning Solutions',
    description:
      'Practical ML systems — trained, evaluated, and deployed to solve specific business problems.',
    icon: 'brain',
    technologies: ['scikit-learn', 'TensorFlow', 'PyTorch', 'Python'],
    useCases: ['Predictive analytics', 'Classification systems', 'Pattern detection'],
  },
  {
    title: 'Educational Technology',
    description:
      'Learning platforms and tools that make education more accessible and effective.',
    icon: 'graduation',
    technologies: ['React', 'Python', 'AI Integration', 'Database Design'],
    useCases: ['Exam preparation', 'Learning management', 'Progress tracking'],
  },
  {
    title: 'Business Management Systems',
    description:
      'Internal tools that help organizations manage operations, resources, and decisions.',
    icon: 'briefcase',
    technologies: ['React', 'Flask', 'MySQL', 'Authentication'],
    useCases: ['Inventory management', 'Employee tracking', 'Reporting dashboards'],
  },
  {
    title: 'REST API Development',
    description:
      'Clean, secure, and well-documented APIs that power web and mobile applications.',
    icon: 'api',
    technologies: ['Flask', 'JWT', 'SQLAlchemy', 'REST APIs'],
    useCases: ['Third-party integrations', 'Mobile backends', 'Microservices'],
  },
  {
    title: 'Database Design',
    description:
      'Relational database schemas designed for performance, integrity, and scalability.',
    icon: 'database',
    technologies: ['MySQL', 'SQL Server', 'SQLAlchemy', 'Relational Databases'],
    useCases: ['Data modeling', 'Query optimization', 'Schema migration'],
  },
  {
    title: 'LLM Integration',
    description:
      'Seamlessly wiring large language models into products for intelligent features.',
    icon: 'sparkles',
    technologies: ['Claude AI', 'Groq', 'Prompt Engineering', 'Python'],
    useCases: ['Content generation', 'Summarization', 'Intelligent search'],
  },
];