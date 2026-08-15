import fs from 'node:fs';
import path from 'node:path';

/**
 * Server-side knowledge base loader.
 * Reads the same JSON knowledge files used by the site (src/knowledge/*)
 * and formats them into a structured prompt context. Building the context
 * here keeps the raw knowledge (and any sensitive details) off the client.
 */

const KNOWLEDGE_DIR = path.join(process.cwd(), 'src', 'knowledge');

interface ProfileKnowledge {
  name: string;
  role: string;
  tagline: string;
  location: string;
  languages: string[];
  bio: string;
  contact: Record<string, string>;
}

interface ProjectKnowledge {
  name: string;
  type: string;
  status: string;
  description: string;
  technologies: string[];
  features: string[];
  highlights: string[];
  link: string;
}

interface ExperienceKnowledge {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
}

interface EducationKnowledge {
  degree: string;
  field: string;
  institution: string;
  period: string;
  status: string;
}

interface CertificationKnowledge {
  title: string;
  organization: string;
  issuer?: string;
  year: string;
}

interface ServiceKnowledge {
  name: string;
  description: string;
  technologies: string[];
}

interface FaqKnowledge {
  question: string;
  answer: string;
}

function readJson<T>(fileName: string): T {
  const raw = fs.readFileSync(path.join(KNOWLEDGE_DIR, fileName), 'utf-8');
  return JSON.parse(raw) as T;
}

/**
 * buildPromptContext — loads all knowledge base JSON files,
 * formats them into a structured context string, and returns it.
 * This context is injected into the system prompt on the server.
 */
export function buildPromptContext(): string {
  const sections: string[] = [];

  // Profile
  const profile = readJson<ProfileKnowledge>('profile.json');
  sections.push(
    `## PROFILE\nName: ${profile.name}\nRole: ${profile.role}\nTagline: ${profile.tagline}\nLocation: ${profile.location}\nLanguages: ${profile.languages.join(', ')}\nBio: ${profile.bio}\nContact: ${Object.entries(profile.contact)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ')}`,
  );

  // Projects
  const projects = readJson<{ projects: ProjectKnowledge[] }>('projects.json');
  sections.push(
    `## PROJECTS\n${projects.projects
      .map(
        (p) =>
          `- ${p.name} (${p.type}, ${p.status}): ${p.description}\n  Technologies: ${p.technologies.join(', ')}\n  Features: ${p.features.join(', ')}\n  Highlights: ${p.highlights.join('; ')}\n  Link: ${p.link}`,
      )
      .join('\n')}`,
  );

  // Skills
  const skills = readJson<{ skills: Record<string, string[]> }>('skills.json');
  sections.push(
    `## SKILLS\n${Object.entries(skills.skills)
      .map(([category, items]) => `${category}: ${items.join(', ')}`)
      .join('\n')}`,
  );

  // Experience
  const experience = readJson<{ experience: ExperienceKnowledge[] }>('experience.json');
  sections.push(
    `## EXPERIENCE\n${experience.experience
      .map(
        (e) =>
          `- ${e.role} at ${e.company} (${e.period}): ${e.description}${e.highlights ? `\n  Highlights: ${e.highlights.join(', ')}` : ''}`,
      )
      .join('\n')}`,
  );

  // Education
  const education = readJson<{ education: EducationKnowledge[] }>('education.json');
  sections.push(
    `## EDUCATION\n${education.education
      .map((e) => `- ${e.degree} in ${e.field} at ${e.institution} (${e.period}, ${e.status})`)
      .join('\n')}`,
  );

  // Certifications
  const certifications = readJson<{ certifications: CertificationKnowledge[] }>('certifications.json');
  sections.push(
    `## CERTIFICATIONS\n${certifications.certifications
      .map((c) => `- ${c.title} from ${c.organization}${c.issuer ? ` (${c.issuer})` : ''} (${c.year})`)
      .join('\n')}`,
  );

  // Services
  const services = readJson<{ services: ServiceKnowledge[] }>('services.json');
  sections.push(
    `## SERVICES\n${services.services
      .map((s) => `- ${s.name}: ${s.description} (Technologies: ${s.technologies.join(', ')})`)
      .join('\n')}`,
  );

  // FAQs
  const faqs = readJson<{ faqs: FaqKnowledge[] }>('faq.json');
  sections.push(
    `## FAQS\n${faqs.faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join('\n')}`,
  );

  return sections.join('\n\n');
}