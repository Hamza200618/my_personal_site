import { Seo } from '@/components/common/Seo';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Hero } from '@/components/sections/hero/Hero';
import { TrustIndicators } from '@/components/sections/TrustIndicators';
import { About } from '@/components/sections/about/About';
import { TechStack } from '@/components/sections/tech/TechStack';
import { Services } from '@/components/sections/services/Services';
import { Profile } from '@/components/sections/profile/Profile';

/**
 * Home — landing page.
 * Hero → Trust Indicators → About → Tech Stack → Services → Profile.
 */
export function Home() {
  return (
    <PageWrapper>
      <Seo
        title="Home"
        description="I design and build intelligent full-stack applications that combine AI, machine learning, and modern cloud infrastructure — turning ambitious ideas into products people actually use."
        path="/"
      />
      <Hero />
      <TrustIndicators />
      <About />
      <TechStack />
      <Services />
      <Profile />
    </PageWrapper>
  );
}