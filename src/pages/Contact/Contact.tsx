import { Seo } from '@/components/common/Seo';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Contact } from '@/components/sections/contact/Contact';

/**
 * Contact — contact & networking hub page.
 */
export function ContactPage() {
  return (
    <PageWrapper>
      <Seo
        title="Contact"
        description="Let's build something intelligent together. Contact me for AI-powered solutions, web applications, or technical collaboration."
        path="/contact"
      />
      <Contact />
    </PageWrapper>
  );
}