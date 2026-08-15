import profileData from '@/knowledge/profile.json';
import projectsData from '@/knowledge/projects.json';
import skillsData from '@/knowledge/skills.json';
import experienceData from '@/knowledge/experience.json';
import educationData from '@/knowledge/education.json';
import certificationsData from '@/knowledge/certifications.json';
import servicesData from '@/knowledge/services.json';
import faqData from '@/knowledge/faq.json';

/**
 * buildPromptContext — loads all knowledge base JSON files,
 * formats them into a structured context string, and returns it.
 * This context is injected into the system prompt.
 */
export function buildPromptContext(): string {
  const sections: string[] = [];

  // Profile
  const profile = profileData as {
    name: string;
    role: string;
    tagline: string;
    location: string;
    languages: string[];
    bio: string;
    contact: Record<string, string>;
  };
  sections.push(
    `## PROFILE\nName: ${profile.name}\nRole: ${profile.role}\nTagline: ${profile.tagline}\nLocation: ${profile.location}\nLanguages: ${profile.languages.join(', ')}\nBio: ${profile.bio}\nContact: ${Object.entries(profile.contact)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ')}`,
  );

  // Projects
  const projects = projectsData as {
    projects: Array<{
      name: string;
      type: string;
      status: string;
      description: string;
      technologies: string[];
      features: string[];
      highlights: string[];
      link: string;
    }>;
  };
  sections.push(
    `## PROJECTS\n${projects.projects
      .map(
        (p) =>
          `- ${p.name} (${p.type}, ${p.status}): ${p.description}\n  Technologies: ${p.technologies.join(', ')}\n  Features: ${p.features.join(', ')}\n  Highlights: ${p.highlights.join('; ')}\n  Link: ${p.link}`,
      )
      .join('\n')}`,
  );

  // Skills
  const skills = skillsData as { skills: Record<string, string[]> };
  sections.push(
    `## SKILLS\n${Object.entries(skills.skills)
      .map(([category, items]) => `${category}: ${items.join(', ')}`)
      .join('\n')}`,
  );

  // Experience
  const experience = experienceData as {
    experience: Array<{
      role: string;
      company: string;
      period: string;
      description: string;
      highlights?: string[];
    }>;
  };
  sections.push(
    `## EXPERIENCE\n${experience.experience
      .map(
        (e) =>
          `- ${e.role} at ${e.company} (${e.period}): ${e.description}${e.highlights ? `\n  Highlights: ${e.highlights.join(', ')}` : ''}`,
      )
      .join('\n')}`,
  );

  // Education
  const education = educationData as {
    education: Array<{
      degree: string;
      field: string;
      institution: string;
      period: string;
      status: string;
    }>;
  };
  sections.push(
    `## EDUCATION\n${education.education
      .map((e) => `- ${e.degree} in ${e.field} at ${e.institution} (${e.period}, ${e.status})`)
      .join('\n')}`,
  );

  // Certifications
  const certifications = certificationsData as {
    certifications: Array<{
      title: string;
      organization: string;
      issuer?: string;
      year: string;
    }>;
  };
  sections.push(
    `## CERTIFICATIONS\n${certifications.certifications
      .map((c) => `- ${c.title} from ${c.organization}${c.issuer ? ` (${c.issuer})` : ''} (${c.year})`)
      .join('\n')}`,
  );

  // Services
  const services = servicesData as {
    services: Array<{
      name: string;
      description: string;
      technologies: string[];
    }>;
  };
  sections.push(
    `## SERVICES\n${services.services
      .map((s) => `- ${s.name}: ${s.description} (Technologies: ${s.technologies.join(', ')})`)
      .join('\n')}`,
  );

  // FAQs
  const faqs = faqData as {
    faqs: Array<{ question: string; answer: string }>;
  };
  sections.push(
    `## FAQS\n${faqs.faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join('\n')}`,
  );

  return sections.join('\n\n');
}