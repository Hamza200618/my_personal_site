import { Seo } from '@/components/common/Seo';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Hero } from './sections/Hero';
import { Overview } from './sections/Overview';
import { Problem } from './sections/Problem';
import { Solution } from './sections/Solution';
import { Features } from './sections/Features';
import { AIFeatures } from './sections/AIFeatures';
import { Architecture } from './sections/Architecture';
import { TechStack } from './sections/TechStack';
import { MLPipeline } from './sections/MLPipeline';
import { OCRPipeline } from './sections/OCRPipeline';
import { Database } from './sections/Database';
import { Workflow } from './sections/Workflow';
import { Challenges } from './sections/Challenges';
import { Lessons } from './sections/Lessons';
import { Roadmap } from './sections/Roadmap';
import { Gallery } from './sections/Gallery';
import { Video } from './sections/Video';
import { GitHub } from './sections/GitHub';
import { CTA } from './sections/CTA';

/**
 * ExamMate — flagship product microsite.
 * A premium product page comparable to OpenAI/Stripe/Linear product pages.
 */
export function ExamMate() {
  return (
    <PageWrapper>
      <Seo
        title="ExamMate AI"
        description="AI-Powered Smart Study Assistant — an intelligent exam preparation platform combining machine learning, OCR, and LLM integration."
        path="/products/exammate-ai"
      />
      <Hero />
      <Overview />
      <Problem />
      <Solution />
      <Features />
      <AIFeatures />
      <Architecture />
      <TechStack />
      <MLPipeline />
      <OCRPipeline />
      <Database />
      <Workflow />
      <Challenges />
      <Lessons />
      <Roadmap />
      <Gallery />
      <Video />
      <GitHub />
      <CTA />
    </PageWrapper>
  );
}