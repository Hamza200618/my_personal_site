/** ExamMate AI — flagship product page content. */

export const EXAMMATE_HERO = {
  title: 'ExamMate AI',
  subtitle: 'AI-Powered Smart Study Assistant',
  description:
    'An intelligent exam preparation platform that combines machine learning, OCR, and LLM integration to help students study smarter, evaluate answers automatically, and track progress with actionable analytics.',
  image: '/projects/home.png',
  buttons: [
    { label: 'GitHub', href: 'https://github.com/', type: 'github' },
    { label: 'Architecture', href: '#architecture', type: 'read-more' },
  ],
} as const;

export const EXAMMATE_OVERVIEW = {
  title: 'Overview',
  subtitle: 'Purpose, audience, and core value',
  purpose:
    'ExamMate AI was built to transform how students prepare for exams. Traditional study methods are manual, scattered, and lack feedback — ExamMate AI brings intelligence to every step of the preparation journey.',
  audience:
    'Designed for students preparing for board exams, university assessments, and competitive tests who need structured practice, instant feedback, and data-driven study insights.',
  coreIdea:
    'Combine machine learning, OCR, and large language models into a single platform that generates questions, evaluates answers, predicts performance, and recommends what to study next.',
  valueProposition:
    'Students save hours of manual study time, receive instant AI-powered feedback, and gain clear visibility into their strengths and weaknesses — leading to better exam outcomes.',
} as const;

export const EXAMMATE_PROBLEM = {
  title: 'The Problem',
  subtitle: 'Why traditional exam preparation falls short',
  points: [
    {
      title: 'Manual Study',
      description: 'Students rely on handwritten notes and textbooks with no structured practice or feedback loop.',
    },
    {
      title: 'Scattered Notes',
      description: 'Study materials are fragmented across notebooks, PDFs, and online sources — hard to organize and review.',
    },
    {
      title: 'No Analytics',
      description: 'Students have no visibility into their performance trends, weak areas, or readiness for exams.',
    },
    {
      title: 'Poor Revision',
      description: 'Without intelligent question generation, revision is repetitive and fails to target knowledge gaps.',
    },
  ],
} as const;

export const EXAMMATE_SOLUTION = {
  title: 'The Solution',
  subtitle: 'How ExamMate AI transforms exam preparation',
  points: [
    {
      title: 'AI Study Buddy',
      description: 'An intelligent assistant that generates practice questions from any uploaded material.',
    },
    {
      title: 'Automatic Evaluation',
      description: 'OCR reads handwritten answers and AI evaluates them with semantic understanding.',
    },
    {
      title: 'Performance Analytics',
      description: 'ML models predict exam readiness and identify weak topics with actionable recommendations.',
    },
    {
      title: 'Structured Practice',
      description: 'Quiz generation, guess papers, and past paper analysis create a complete revision system.',
    },
  ],
} as const;

export const EXAMMATE_FEATURES = {
  title: 'Key Features',
  subtitle: 'Everything students need to prepare smarter',
  features: [
    { title: 'AI Study Buddy', description: 'Conversational AI that answers questions and explains concepts.', icon: 'bot' },
    { title: 'Quiz Generator', description: 'Auto-generates quizzes from uploaded notes and past papers.', icon: 'sparkles' },
    { title: 'Exam Predictor', description: 'ML models predict exam scores based on performance history.', icon: 'brain' },
    { title: 'Guess Paper Generator', description: 'Creates predicted question papers from past exam patterns.', icon: 'file' },
    { title: 'Performance Dashboard', description: 'Visual analytics showing progress, strengths, and weak areas.', icon: 'chart' },
    { title: 'Lecture Upload', description: 'Upload lecture notes and PDFs for AI processing.', icon: 'upload' },
    { title: 'Past Paper Analysis', description: 'Analyzes past papers to identify recurring question patterns.', icon: 'search' },
    { title: 'OCR Answer Checking', description: 'Scans and evaluates handwritten answers automatically.', icon: 'scan' },
    { title: 'Short Answer Evaluation', description: 'AI evaluates short answers with semantic understanding.', icon: 'check' },
    { title: 'Long Answer Evaluation', description: 'Deep evaluation of long-form answers with detailed feedback.', icon: 'book' },
    { title: 'Authentication', description: 'Secure user accounts with JWT-based authentication.', icon: 'lock' },
    { title: 'Progress Tracking', description: 'Track study sessions, quiz scores, and improvement over time.', icon: 'trending' },
  ],
} as const;

export const EXAMMATE_AI_FEATURES = {
  title: 'AI Features',
  subtitle: 'The intelligence powering ExamMate AI',
  features: [
    { title: 'Claude AI Integration', description: 'LLM-powered question generation and answer evaluation.', icon: 'sparkles' },
    { title: 'Groq-Ready Architecture', description: 'Designed for ultra-fast inference with Groq hardware.', icon: 'cpu' },
    { title: 'NLP Processing', description: 'Natural language understanding for semantic evaluation.', icon: 'message' },
    { title: 'OCR Pipeline', description: 'Converts scanned documents and handwriting to text.', icon: 'scan' },
    { title: 'Prompt Engineering', description: 'Carefully crafted prompts for consistent AI outputs.', icon: 'pen' },
    { title: 'Adaptive Learning', description: 'Recommendations adapt based on student performance.', icon: 'brain' },
    { title: 'Semantic Evaluation', description: 'Understands meaning, not just keywords, in answers.', icon: 'check' },
  ],
} as const;

export const EXAMMATE_ARCHITECTURE = {
  title: 'System Architecture',
  subtitle: 'How the platform is structured',
  layers: [
    { title: 'Frontend', description: 'React + Tailwind CSS responsive interface', icon: 'layout' },
    { title: 'Flask Backend', description: 'REST API with JWT authentication', icon: 'server' },
    { title: 'Authentication', description: 'Secure user management with JWT tokens', icon: 'lock' },
    { title: 'ML Models', description: 'Random Forest, Decision Tree, Logistic Regression', icon: 'brain' },
    { title: 'Database', description: 'MySQL relational database', icon: 'database' },
    { title: 'Claude AI', description: 'LLM integration for generation and evaluation', icon: 'sparkles' },
    { title: 'PDF Processing', description: 'Document parsing and text extraction', icon: 'file' },
    { title: 'Analytics', description: 'Performance tracking and insights', icon: 'chart' },
  ],
} as const;

export const EXAMMATE_TECH_STACK = {
  title: 'Technology Stack',
  subtitle: 'The tools that power ExamMate AI',
  categories: [
    { title: 'Frontend', technologies: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'] },
    { title: 'Backend', technologies: ['Flask', 'REST APIs', 'JWT', 'SQLAlchemy'] },
    { title: 'Database', technologies: ['MySQL', 'Relational Database Design'] },
    { title: 'AI', technologies: ['Claude AI', 'Groq', 'Prompt Engineering', 'NLP', 'OCR'] },
    { title: 'Machine Learning', technologies: ['scikit-learn', 'Random Forest', 'Decision Tree', 'Logistic Regression'] },
    { title: 'Deployment', technologies: ['Render', 'Vercel', 'GitHub', 'GitHub Actions'] },
  ],
} as const;

export const EXAMMATE_ML_PIPELINE = {
  title: 'Machine Learning Pipeline',
  subtitle: 'From raw data to exam predictions',
  steps: [
    { title: 'Past Papers', description: 'Historical exam papers collected as training data' },
    { title: 'Lecture Notes', description: 'Course material processed for feature extraction' },
    { title: 'Feature Extraction', description: 'Key topics, difficulty levels, and patterns identified' },
    { title: 'ML Models', description: 'Random Forest, Decision Tree, Logistic Regression trained' },
    { title: 'Prediction', description: 'Models predict exam scores and topic readiness' },
    { title: 'Analytics', description: 'Insights delivered to students via dashboard' },
  ],
} as const;

export const EXAMMATE_OCR_PIPELINE = {
  title: 'OCR Pipeline',
  subtitle: 'From scanned documents to intelligent evaluation',
  steps: [
    { title: 'Scanned PDF', description: 'Handwritten or printed documents uploaded' },
    { title: 'OCR', description: 'Optical character recognition extracts text' },
    { title: 'Text Cleaning', description: 'Noise removal and normalization' },
    { title: 'NLP', description: 'Natural language processing for understanding' },
    { title: 'Knowledge Extraction', description: 'Key concepts and answers identified' },
    { title: 'AI Evaluation', description: 'LLM evaluates answers with semantic understanding' },
  ],
} as const;

export const EXAMMATE_DATABASE = {
  title: 'Database Design',
  subtitle: 'Entity relationship overview',
  entities: [
    { title: 'Users', description: 'Student accounts with profiles and roles', icon: 'users' },
    { title: 'Uploads', description: 'Lecture notes, PDFs, and study materials', icon: 'upload' },
    { title: 'Quiz Results', description: 'Quiz attempts, scores, and performance data', icon: 'chart' },
    { title: 'Generated Content', description: 'AI-generated quizzes, guess papers, and summaries', icon: 'sparkles' },
    { title: 'Chat Messages', description: 'Conversations with the AI study buddy', icon: 'message' },
    { title: 'Predictions', description: 'ML model predictions and readiness scores', icon: 'brain' },
  ],
} as const;

export const EXAMMATE_WORKFLOW = {
  title: 'Application Workflow',
  subtitle: 'How a student uses ExamMate AI',
  steps: [
    { title: 'User Login', description: 'Secure authentication with JWT' },
    { title: 'Dashboard', description: 'Overview of progress and recommendations' },
    { title: 'Upload', description: 'Add lecture notes or past papers' },
    { title: 'AI Processing', description: 'OCR, NLP, and ML models process the material' },
    { title: 'Analytics', description: 'Performance insights and predictions generated' },
    { title: 'Recommendations', description: 'Personalized study suggestions delivered' },
  ],
} as const;

export const EXAMMATE_CHALLENGES = {
  title: 'Engineering Challenges',
  subtitle: 'Problems solved during development',
  challenges: [
    {
      title: 'OCR Accuracy',
      description: 'Handwritten answers vary widely. Tuned preprocessing and cleaning to improve recognition accuracy.',
      icon: 'scan',
    },
    {
      title: 'Model Selection',
      description: 'Evaluated multiple ML models to find the best balance of accuracy and speed for predictions.',
      icon: 'brain',
    },
    {
      title: 'Prompt Engineering',
      description: 'Crafted prompts that produce consistent, high-quality question generation and evaluation.',
      icon: 'pen',
    },
    {
      title: 'Performance',
      description: 'Optimized API responses and database queries to keep the platform fast under load.',
      icon: 'cpu',
    },
    {
      title: 'Data Processing',
      description: 'Built robust pipelines for PDF parsing, OCR, and text normalization at scale.',
      icon: 'database',
    },
  ],
} as const;

export const EXAMMATE_LESSONS = {
  title: 'Lessons Learned',
  subtitle: 'Engineering growth from building ExamMate AI',
  lessons: [
    {
      title: 'Architecture Matters',
      description: 'A clean separation between frontend, backend, and AI services made the platform scalable and maintainable.',
    },
    {
      title: 'Data Quality is Everything',
      description: 'The quality of OCR output and training data directly determined the quality of AI features.',
    },
    {
      title: 'Iterate with Users',
      description: 'Feedback from real students shaped the features that mattered most — analytics and instant feedback.',
    },
    {
      title: 'AI is a Tool, Not Magic',
      description: 'The best AI features are those that solve a specific, well-understood problem for the user.',
    },
  ],
} as const;

export const EXAMMATE_ROADMAP = {
  title: 'Future Roadmap',
  subtitle: 'What comes next for ExamMate AI',
  items: [
    { title: 'Adaptive Learning Paths', description: 'Personalized study plans that adapt in real-time.', period: 'Q1' },
    { title: 'Multi-Language Support', description: 'Exam preparation in multiple languages.', period: 'Q2' },
    { title: 'Mobile Application', description: 'Native mobile experience for iOS and Android.', period: 'Q3' },
    { title: 'Institutional Analytics', description: 'Dashboards for schools and coaching centers.', period: 'Q4' },
  ],
} as const;

export const EXAMMATE_GALLERY = {
  title: 'Gallery',
  subtitle: 'ExamMate AI in action',
  images: [
    { src: '/projects/home.png', alt: 'ExamMate AI home dashboard', device: 'desktop' },
    { src: '/projects/quiz.png', alt: 'ExamMate AI quiz generation', device: 'tablet' },
    { src: '/projects/upl.png', alt: 'ExamMate AI lecture upload', device: 'mobile' },
  ],
} as const;

export const EXAMMATE_VIDEO = {
  title: 'Demo Video',
  subtitle: 'See ExamMate AI in action',
  videoSrc: '/projects/exam_video.mp4',
  poster: '/projects/home.png',
} as const;

export const EXAMMATE_GITHUB = {
  title: 'Open Source',
  subtitle: 'Explore the codebase on GitHub',
  repoUrl: 'https://github.com/',
  repoName: 'exammate-ai',
  description:
    'The full ExamMate AI codebase is available on GitHub. Explore the architecture, ML pipelines, and AI integration patterns used to build the platform.',
  highlights: [
    'Flask REST API with JWT authentication',
    'ML models for exam prediction',
    'OCR pipeline for answer evaluation',
    'Claude AI integration for generation',
  ],
} as const;

export const EXAMMATE_CTA = {
  title: 'Interested in AI-Powered Educational Software?',
  subtitle: "Let's build something together.",
  buttonLabel: 'Explore More Products',
  buttonHref: '/products',
} as const;