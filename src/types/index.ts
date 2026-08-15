/**
 * Global type definitions for the portfolio.
 * Centralized types keep the codebase scalable and self-documenting.
 */

/** Route path map — single source of truth for routing. */
export type RoutePath = '/' | '/products' | '/case-studies' | '/services' | '/resume' | '/contact' | '/404';

/** Theme identifier — dark is default, light is future-proofed. */
export type Theme = 'dark' | 'light';

/** Navigation item used by the Navbar and mobile drawer. */
export interface NavItem {
  label: string;
  path: string;
}

/** Button visual variants. */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

/** Button size variants. */
export type ButtonSize = 'sm' | 'md' | 'lg';

/** Card visual variants. */
export type CardVariant = 'default' | 'elevated' | 'outline';

/** Badge visual variants. */
export type BadgeVariant = 'primary' | 'accent' | 'neutral' | 'outline';

/** Social link entries rendered in the Footer. */
export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email';
}

/** SEO metadata passed to the Seo component. */
export interface SeoProps {
  title: string;
  description?: string;
  path?: string;
  type?: 'website' | 'article';
}

/** Trust indicator card displayed on the hero page. */
export interface TrustIndicator {
  label: string;
  description: string;
  icon: 'cpu' | 'brain' | 'sparkles' | 'code' | 'target' | 'layers';
}

/** Animated counter statistic. */
export interface Statistic {
  value: number;
  suffix?: string;
  label: string;
  icon: 'rocket' | 'globe' | 'layers' | 'award' | 'book' | 'box';
}

/** Core value card. */
export interface CoreValue {
  title: string;
  description: string;
  icon: 'target' | 'book' | 'layout' | 'scale' | 'user' | 'lightbulb';
}

/** Career timeline milestone. */
export interface TimelineItem {
  title: string;
  period: string;
  description: string;
  icon: 'code' | 'graduation' | 'university' | 'trophy' | 'brain' | 'rocket';
}

/** Current focus area chip. */
export interface FocusArea {
  label: string;
  icon: 'cpu' | 'brain' | 'sparkles' | 'scan' | 'code' | 'cloud';
}

/** Technology category card. */
export interface TechnologyCategory {
  title: string;
  description: string;
  icon: 'cpu' | 'server' | 'layout' | 'database' | 'cloud' | 'wrench';
  technologies: string[];
}

/** Service offering card. */
export interface Service {
  title: string;
  description: string;
  icon: 'bot' | 'message' | 'globe' | 'users' | 'workflow' | 'brain' | 'graduation' | 'briefcase' | 'api' | 'database' | 'sparkles';
  technologies: string[];
  useCases: string[];
  featured?: boolean;
}

/** Development process step. */
export interface WorkflowStep {
  title: string;
  description: string;
  icon: 'search' | 'layout' | 'pen' | 'code' | 'check' | 'rocket' | 'refresh';
}

/** Product category filter. */
export type ProductCategory = 'all' | 'ai' | 'web' | 'crm' | 'education' | 'portfolio';

/** Product status. */
export type ProductStatus = 'production' | 'completed' | 'development' | 'research';

/** Product metric. */
export interface ProductMetric {
  label: string;
  value: number;
  suffix?: string;
}

/** Product link. */
export interface ProductLink {
  label: string;
  href: string;
  type: 'github' | 'demo' | 'case-study' | 'read-more';
}

/** Featured product showcase. */
export interface Product {
  title: string;
  category: Exclude<ProductCategory, 'all'>;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  metrics: ProductMetric[];
  links: ProductLink[];
  status: ProductStatus;
  image: string;
  hero?: boolean;
  /** Hero-only fields */
  aiCapabilities?: string[];
  architecture?: string[];
  roadmap?: string[];
}

/** Professional experience entry. */
export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

/** Education entry. */
export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  period: string;
  status: 'completed' | 'in-progress' | 'expected';
  details?: string;
}

/** Certification entry. */
export interface Certification {
  title: string;
  organization: string;
  issuer: string;
  image: string;
  issueDate: string;
  skills: string[];
}

/** Achievement entry. */
export interface Achievement {
  title: string;
  description: string;
  icon: 'trophy' | 'rocket' | 'bot' | 'award' | 'globe';
}

/** Language proficiency. */
export interface Language {
  name: string;
  level: string;
  percentage: number;
}

/** Professional interest chip. */
export interface Interest {
  label: string;
  icon: 'cpu' | 'brain' | 'cloud' | 'layout' | 'code' | 'graduation' | 'wrench' | 'globe';
}

/** Career journey milestone. */
export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
}

/** Contact method card. */
export interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: 'mail' | 'phone' | 'linkedin' | 'github' | 'map-pin' | 'building';
}

/** FAQ accordion item. */
export interface FAQItem {
  question: string;
  answer: string;
}

/** Social professional link. */
export interface ProfessionalLink {
  label: string;
  href: string;
  description: string;
  icon: 'github' | 'linkedin' | 'mail' | 'globe';
}

/** Chat message in the AI assistant. */
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
