import type { ContactMethod, FAQItem, ProfessionalLink } from '@/types';

/** Contact hero content. */
export const CONTACT_HERO = {
  title: "Let's Build Something Amazing Together",
  subtitle:
    "Whether you're looking for an AI-powered solution, a modern web application, or a technical collaborator, I'd love to hear about your idea.",

} as const;

/** Contact methods. */
export const CONTACT_METHODS: ContactMethod[] = [
  {
    label: 'Email',
    value: 'syedhamzakamal48@gmail.com',
    href: 'mailto:syedhamzakamal48@gmail.com',
    icon: 'mail',
  },
  {
    label: 'Phone',
    value: '+92 300 0000000',
    href: 'tel:+923000000000',
    icon: 'phone',
  },
  {
    label: 'LinkedIn',
    value: 'View Profile',
    href: 'https://www.linkedin.com/in/me?trk=p_mwlite_feed-secondary_nav',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'View Profile',
    href: 'https://github.com/Hamza200618',
    icon: 'github',
  },
  {
    label: 'Location',
    value: 'Karachi, Pakistan',
    href: 'https://maps.google.com/?q=Karachi,Pakistan',
    icon: 'map-pin',
  },
  {
    label: 'NexusAI',
    value: 'Visit Company',
    href: 'https://nexusai-company-portfolio-pjns.vercel.app',
    icon: 'building',
  },
];

/** Project type options for the contact form. */
export const PROJECT_TYPES = [
  'AI Application',
  'AI Agent',
  'Chatbot',
  'CRM System',
  'Web Application',
  'Machine Learning',
  'Consultation',
  'Other',
] as const;

/** Availability information. */
export const AVAILABILITY = {
  status: 'Available for New Projects',
  preferredWork: ['Remote', 'Freelance', 'Startup Collaboration'],
  responseTime: 'Usually within 24 hours',
  timezone: 'Pakistan Standard Time',
} as const;

/** Frequently asked questions. */
export const FAQS: FAQItem[] = [
  {
    question: 'What services do you provide?',
    answer:
      'I specialize in AI-powered applications, intelligent automation, chatbots, CRM systems, full-stack web applications, REST API development, and machine learning solutions.',
  },
  {
    question: 'Can you build AI applications?',
    answer:
      'Yes. I build AI applications using Python, Flask, Claude AI, Groq, and machine learning frameworks — from intelligent document processing to predictive analytics.',
  },
  {
    question: 'Do you work remotely?',
    answer:
      'Absolutely. I work fully remotely and collaborate with clients across different time zones using modern communication and project management tools.',
  },
  {
    question: 'Can you join startup teams?',
    answer:
      'Yes. As Co-Founder of NexusAI, I understand startup challenges and can contribute as a technical founder, lead developer, or AI specialist.',
  },
  {
    question: 'Do you provide long-term support?',
    answer:
      'Yes. I provide ongoing maintenance, feature development, and technical support for all projects I build, ensuring they evolve with your needs.',
  },
  {
    question: 'How can I see your previous work?',
    answer:
      'You can explore my featured products section which showcases ExamMate AI, Smart Campus System, NexusAI Portfolio, and other projects with detailed case studies.',
  },
];

/** Social & professional links. */
export const PROFESSIONAL_LINKS: ProfessionalLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Hamza200618',
    description: 'Explore my open-source code and project repositories.',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav',
    description: 'Connect with me professionally and follow my journey.',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:syedhamzakamal48@gmail.com',
    description: 'Reach me directly for projects, collaborations, and ideas.',
    icon: 'mail',
  },
  {
    label: 'NexusAI',
    href: 'https://nexusai-company-portfolio-pjns.vercel.app',
    description: 'Visit my company portfolio and explore our AI products.',
    icon: 'globe',
  },
];

/** Resume information. */
export const RESUME_INFO = {
  fileName: 'Hamza_resume.pdf.pdf',
  url: '/personal/Hamza_resume.pdf.pdf',
  lastUpdated: 'August 2026',
} as const;

/** Contact CTA. */
export const CONTACT_CTA = {
  title: "Let's turn your ideas into intelligent software.",
  subtitle: 'I build AI-powered products that solve real problems.',
  primaryButton: 'Start a Conversation',
  secondaryButton: 'View My Products',
} as const;