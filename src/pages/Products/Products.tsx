import { Seo } from '@/components/common/Seo';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { PRODUCTS } from '@/data/products';
import { HeroProduct } from '@/components/sections/products/HeroProduct';
import { ProductGrid } from '@/components/sections/products/ProductGrid';

/**
 * Products — all products page.
 * Shows the hero product (ExamMate AI) and all other products.
 */
export function Products() {
  const heroProduct = PRODUCTS.find((p) => p.hero);
  const otherProducts = PRODUCTS.filter((p) => !p.hero);

  return (
    <PageWrapper>
      <Seo
        title="Products"
        description="Explore AI-powered applications, business systems, and software solutions built by NexusAI."
        path="/products"
      />
      <Section aria-label="Products" className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
        </div>
        <Container className="relative z-10">
          <SectionTitle
            title="Products"
            subtitle="A selection of AI-powered applications, business systems, and software solutions designed to solve real-world problems."
            align="center"
          />

          {heroProduct && <HeroProduct product={heroProduct} />}

          <div className="mt-16">
            <ProductGrid products={otherProducts} />
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}