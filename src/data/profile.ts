import type {
  Achievement,
  Certification,
  EducationEntry,
  ExperienceEntry,
  Interest,
  JourneyMilestone,
  Language,
} from '@/types';

/** Professional experience. */
export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Co-Founder',
    company: 'NexusAI',
    period: '2026 – Present',
    description:
      'Leading the development of AI-powered applications, intelligent automation systems, chatbots, CRM platforms, and custom software solutions.',
    highlights: [
      'AI Product Development',
      'Full Stack Development',
      'Technical Architecture',
      'Client Solutions',
      'Team Collaboration',
    ],
    technologies: ['Python', 'Flask', 'React', 'TypeScript', 'Claude AI', 'MySQL'],
  },
  {
    role: 'Freelance Full Stack Developer',
    company: 'Independent Clients',
    period: '2024 – Present',
    description:
      'Designed and developed responsive websites, AI-powered applications, Flask backends, and database-driven systems for independent clients.',
    highlights: [
      'Responsive Web Design',
      'AI-Powered Applications',
      'Flask Backend Development',
      'Database Design',
    ],
    technologies: ['Flask', 'React', 'MySQL', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
  },
];

/** Education history. */
export const EDUCATION: EducationEntry[] = [
  {
    degree: 'Bachelor of Science',
    field: 'Cloud Computing & Information Sciences',
    institution: 'Sir Syed University of Engineering & Technology',
    period: 'Expected 2028',
    status: 'expected',
  },
  {
    degree: 'Advanced Diploma',
    field: 'ACCPAI',
    institution: 'Aptech Pakistan',
    period: 'October 2024 – October 2027',
    status: 'in-progress',
  },
  {
    degree: 'Intermediate',
    field: 'Pre-Engineering',
    institution: 'Government Science College 11-A',
    period: 'Completed 2025',
    status: 'completed',
  },
  {
    degree: 'Matriculation',
    field: 'Science',
    institution: 'AL-Hameed Secondary School',
    period: 'Completed 2023',
    status: 'completed',
  },
];

/** Certifications. */
export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Basics of Python',
    organization: 'UniAthena',
    issuer: 'Cambridge International Qualifications',
    image: '/assets/python.jpeg',
    issueDate: '2024',
    skills: ['Python', 'Programming Fundamentals', 'Problem Solving'],
  },
  {
    title: 'Basics of Machine Learning Algorithms',
    organization: 'UniAthena',
    issuer: 'Cambridge International Qualifications',
    image: '/assets/machine_learning.jpeg',
    issueDate: '2024',
    skills: ['Machine Learning', 'Algorithms', 'Data Analysis'],
  },
  {
    title: 'Google Soft Skills Program',
    organization: 'Google',
    issuer: 'Pakistan Freelancers Association',
    image: '/assets/google.jpeg',
    issueDate: '2024',
    skills: ['Communication', 'Collaboration', 'Professionalism'],
  },
  {
    title: "SMEC'26",
    organization: 'Certificate of Participant',
    issuer: 'Web Development',
    image: "/assets/smec'26.png",
    issueDate: '2026',
    skills: ['Web Development', 'Competition', 'Technical Skills'],
  },
  {
    title: 'Semester Project Exhibition Winner',
    organization: 'Smart Campus Resource & Complaint Management System',
    issuer: 'Winner',
    image: "/assets/exhibiton'26.png",
    issueDate: '2026',
    skills: ['Full Stack Development', 'Project Management', 'Presentation'],
  },
];

/** Achievements. */
export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Exhibition Winner',
    description: 'Won the semester project exhibition with Smart Campus Resource & Complaint Management System.',
    icon: 'trophy',
  },
  {
    title: 'Co-Founder of NexusAI',
    description: 'Co-founded NexusAI to build intelligent AI-powered software solutions.',
    icon: 'rocket',
  },
  {
    title: 'Built ExamMate AI',
    description: 'Developed an AI-powered exam preparation platform combining ML, OCR, and LLM integration.',
    icon: 'bot',
  },
  {
    title: 'Multiple AI Certifications',
    description: 'Earned certifications in Python, Machine Learning, and Soft Skills from recognized organizations.',
    icon: 'award',
  },
  {
    title: 'Full Stack Developer',
    description: 'Building complete applications end-to-end — from database design to responsive frontends.',
    icon: 'globe',
  },
];

/** Language proficiency. */
export const LANGUAGES: Language[] = [
  { name: 'English', level: 'Professional', percentage: 90 },
  { name: 'Urdu', level: 'Native', percentage: 100 },
];

/** Professional interests. */
export const INTERESTS: Interest[] = [
  { label: 'Artificial Intelligence', icon: 'cpu' },
  { label: 'Machine Learning', icon: 'brain' },
  { label: 'Cloud Computing', icon: 'cloud' },
  { label: 'Software Architecture', icon: 'layout' },
  { label: 'Full Stack Development', icon: 'code' },
  { label: 'Educational Technology', icon: 'graduation' },
  { label: 'Developer Tools', icon: 'wrench' },
  { label: 'Open Source', icon: 'globe' },
];

/** Career journey timeline. */
export const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    year: '2023',
    title: 'Matriculation',
    description: 'Completed matriculation from AL-Hameed Secondary School.',
  },
  {
    year: '2024',
    title: 'Started ACCPAI Diploma',
    description: 'Began the Advanced Diploma in Computer Applications at Aptech.',
  },
  {
    year: '2025',
    title: 'Intermediate',
    description: 'Completed intermediate from Government Science College 11-A.',
  },
  {
    year: '2026',
    title: 'Started BS Degree',
    description: 'Began BS in Cloud Computing at Sir Syed University.',
  },
  {
    year: '2026',
    title: 'Co-Founded NexusAI',
    description: 'Launched NexusAI to build intelligent AI-powered software.',
  },
  {
    year: '2026',
    title: 'Built ExamMate AI',
    description: 'Developed the flagship AI-powered exam preparation platform.',
  },
  {
    year: '2026',
    title: 'Won Semester Project Exhibition',
    description: 'Recognized for the Smart Campus Resource & Complaint Management System.',
  },
  {
    year: '2027',
    title: 'Continuing Diploma',
    description: 'Advancing through the ACCPAI diploma program at Aptech.',
  },
  {
    year: '2028',
    title: 'Expected Graduation',
    description: 'Anticipated completion of BS in Cloud Computing.',
  },
];