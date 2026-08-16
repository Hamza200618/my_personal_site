import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Server-side knowledge base loader.
 * Reads the same JSON knowledge files used by the site (src/knowledge/*)
 * and formats them into a structured prompt context. Building the context
 * here keeps the raw knowledge (and any sensitive details) off the client.
 *
 * On Vercel the project root is the function cwd, so we first try
 * process.cwd()/src/knowledge. As a fallback we resolve relative to this
 * module (api/lib → ../../src/knowledge) in case the cwd differs.
 * vercel.json explicitly includes src/knowledge/** in the function output.
 */

function resolveKnowledgeDir() {
  const fromCwd = path.join(process.cwd(), 'src', 'knowledge');
  if (fs.existsSync(fromCwd)) return fromCwd;

  const here = path.dirname(fileURLToPath(import.meta.url)); // <root>/api/lib
  const fromModule = path.join(here, '..', '..', 'src', 'knowledge');
  return fromModule;
}

const KNOWLEDGE_DIR = resolveKnowledgeDir();

function readJson(fileName) {
  const raw = fs.readFileSync(path.join(KNOWLEDGE_DIR, fileName), 'utf-8');
  return JSON.parse(raw);
}

/**
 * buildPromptContext — loads all knowledge base JSON files,
 * formats them into a structured context string, and returns it.
 * This context is injected into the system prompt on the server.
 */
export function buildPromptContext() {
  const sections = [];

  // Profile
  const profile = readJson('profile.json');
  sections.push(
    `## PROFILE\nName: ${profile.name}\nRole: ${profile.role}\nTagline: ${profile.tagline}\nLocation: ${profile.location}\nLanguages: ${profile.languages.join(', ')}\nBio: ${profile.bio}\nContact: ${Object.entries(profile.contact)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ')}`,
  );

  // Projects
  const projects = readJson('projects.json');
  sections.push(
    `## PROJECTS\n${projects.projects
      .map(
        (p) =>
          `- ${p.name} (${p.type}, ${p.status}): ${p.description}\n  Technologies: ${p.technologies.join(', ')}\n  Features: ${p.features.join(', ')}\n  Highlights: ${p.highlights.join('; ')}\n  Link: ${p.link}`,
      )
      .join('\n')}`,
  );

  // Skills
  const skills = readJson('skills.json');
  sections.push(
    `## SKILLS\n${Object.entries(skills.skills)
      .map(([category, items]) => `${category}: ${items.join(', ')}`)
      .join('\n')}`,
  );

  // Experience
  const experience = readJson('experience.json');
  sections.push(
    `## EXPERIENCE\n${experience.experience
      .map(
        (e) =>
          `- ${e.role} at ${e.company} (${e.period}): ${e.description}${e.highlights ? `\n  Highlights: ${e.highlights.join(', ')}` : ''}`,
      )
      .join('\n')}`,
  );

  // Education
  const education = readJson('education.json');
  sections.push(
    `## EDUCATION\n${education.education
      .map((e) => `- ${e.degree} in ${e.field} at ${e.institution} (${e.period}, ${e.status})`)
      .join('\n')}`,
  );

  // Certifications
  const certifications = readJson('certifications.json');
  sections.push(
    `## CERTIFICATIONS\n${certifications.certifications
      .map((c) => `- ${c.title} from ${c.organization}${c.issuer ? ` (${c.issuer})` : ''} (${c.year})`)
      .join('\n')}`,
  );

  // Services
  const services = readJson('services.json');
  sections.push(
    `## SERVICES\n${services.services
      .map((s) => `- ${s.name}: ${s.description} (Technologies: ${s.technologies.join(', ')})`)
      .join('\n')}`,
  );

  // FAQs
  const faqs = readJson('faq.json');
  sections.push(
    `## FAQS\n${faqs.faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join('\n')}`,
  );

  return sections.join('\n\n');
}