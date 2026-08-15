import type { Product } from '@/types';

/** Featured products — AI-powered software built by NexusAI. */
export const PRODUCTS: Product[] = [
  {
    title: 'ExamMate AI',
    category: 'education',
    summary:
      'An AI-powered exam preparation platform that helps students study smarter with intelligent question generation, OCR-based answer checking, and personalized learning insights.',
    problem:
      'Students struggle with inefficient study methods, lack of personalized feedback, and limited access to quality practice material.',
    solution:
      'ExamMate AI combines machine learning, OCR, and LLM integration to generate practice questions, evaluate handwritten answers, and provide instant, actionable feedback.',
    technologies: ['Python', 'Flask', 'MySQL', 'Claude AI', 'Groq', 'Machine Learning', 'OCR', 'React', 'Tailwind CSS'],
    features: ['AI Tutor', 'OCR', 'Quiz Generator', 'ML Prediction', 'Analytics', 'Authentication', 'Dashboard'],
    metrics: [
      { label: 'Modules', value: 12 },
      { label: 'Pages', value: 25 },
      { label: 'AI Features', value: 6 },
      { label: 'ML Models', value: 3 },
      { label: 'DB Tables', value: 18 },
      { label: 'Technologies', value: 9 },
    ],
    links: [
      { label: 'View Product', href: '/products/exammate-ai', type: 'read-more' },
      { label: 'GitHub', href: 'https://github.com/', type: 'github' },
    ],
    status: 'production',
    image: '/projects/home.png',
    hero: true,
    aiCapabilities: [
      'Intelligent question generation from any topic',
      'OCR-based handwritten answer evaluation',
      'ML-powered performance prediction',
      'Personalized study recommendations',
    ],
    architecture: [
      'React frontend with Tailwind CSS',
      'Flask REST API backend',
      'MySQL relational database',
      'Claude AI + Groq for LLM features',
      'OCR pipeline for answer scanning',
    ],
    roadmap: [
      'Adaptive learning paths',
      'Multi-language support',
      'Mobile application',
      'Institutional analytics dashboard',
    ],
  },
  {
    title: 'Smart Campus Resource & Complaint Management System',
    category: 'crm',
    summary:
      'A comprehensive campus management platform that streamlines resource allocation, complaint tracking, and administrative workflows for educational institutions.',
    problem:
      'Universities struggle with manual resource booking, untracked complaints, and fragmented administrative processes.',
    solution:
      'A centralized system with role-based dashboards, real-time resource availability, and automated complaint lifecycle management.',
    technologies: ['React', 'TypeScript', 'Flask', 'MySQL', 'Authentication', 'JWT', 'Tailwind CSS'],
    features: ['Resource Booking', 'Complaint Tracking', 'Role-based Access', 'Dashboard', 'Notifications', 'Reports'],
    metrics: [
      { label: 'Modules', value: 8 },
      { label: 'Pages', value: 20 },
      { label: 'AI Features', value: 2 },
      { label: 'DB Tables', value: 15 },
      { label: 'Technologies', value: 7 },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/', type: 'github' }],
    status: 'completed',
    image: '/projects/smart.png',
  },
  {
    title: 'NexusAI Company Portfolio',
    category: 'portfolio',
    summary:
      'A premium company portfolio website for NexusAI, showcasing AI products, services, and the vision behind the brand.',
    problem:
      'NexusAI needed a professional online presence that communicates its AI expertise and product portfolio to potential clients and partners.',
    solution:
      'A modern, performance-optimized portfolio with animated sections, product showcases, and a cohesive premium design system.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    features: ['Hero Section', 'Product Showcase', 'Services', 'About', 'Contact', 'Animations'],
    metrics: [
      { label: 'Modules', value: 6 },
      { label: 'Pages', value: 8 },
      { label: 'AI Features', value: 1 },
      { label: 'DB Tables', value: 0 },
      { label: 'Technologies', value: 5 },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/', type: 'github' },
      { label: 'Live Demo', href: 'https://nexusai-company-portfolio-pjns.vercel.app', type: 'demo' },
    ],
    status: 'production',
    image: '/projects/nexus.png',
  },
  {
    title: 'Artora',
    category: 'ai',
    summary:
      'An AI-powered creative platform that generates and enhances digital artwork using machine learning models.',
    problem:
      'Artists and designers need fast, intelligent tools to generate concepts, enhance images, and explore creative directions.',
    solution:
      'Artora leverages ML models for image generation, style transfer, and enhancement — wrapped in an intuitive creative interface.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Flask', 'Machine Learning'],
    features: ['Image Generation', 'Style Transfer', 'Enhancement', 'Gallery', 'Export', 'Authentication'],
    metrics: [
      { label: 'Modules', value: 5 },
      { label: 'Pages', value: 12 },
      { label: 'AI Features', value: 4 },
      { label: 'ML Models', value: 2 },
      { label: 'DB Tables', value: 8 },
      { label: 'Technologies', value: 6 },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/', type: 'github' },
      { label: 'Live Demo', href: 'https://hamza200618.github.io/Artora/', type: 'demo' },
    ],
    status: 'completed',
    image: '/projects/artora.png',
  },
  {
    title: 'CareGroup',
    category: 'web',
    summary:
      'A healthcare management platform that connects patients, providers, and administrators through a unified digital experience.',
    problem:
      'Healthcare organizations need a secure, efficient way to manage appointments, patient records, and provider workflows.',
    solution:
      'CareGroup provides role-based dashboards, appointment scheduling, patient record management, and secure authentication.',
    technologies: ['React', 'TypeScript', 'Flask', 'MySQL', 'JWT', 'Tailwind CSS'],
    features: ['Appointments', 'Patient Records', 'Provider Dashboard', 'Authentication', 'Notifications', 'Reports'],
    metrics: [
      { label: 'Modules', value: 7 },
      { label: 'Pages', value: 16 },
      { label: 'AI Features', value: 1 },
      { label: 'DB Tables', value: 12 },
      { label: 'Technologies', value: 6 },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/', type: 'github' }],
    status: 'completed',
    image: '/projects/care.png',
  },
];