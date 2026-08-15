import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { PRODUCTS } from '@/data/products';
import type { ProductCategory } from '@/types';
import { FilterBar } from './FilterBar';
import { HeroProduct } from './HeroProduct';
import { ProductGrid } from './ProductGrid';

/**
 * FeaturedProducts — premium products showcase section.
 * Hero product (ExamMate AI) + filterable product grid.
 */
export function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState<ProductCategory>('all');

  const heroProduct = useMemo(() => PRODUCTS.find((p) => p.hero), []);
  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') {
      return PRODUCTS.filter((p) => !p.hero);
    }
    return PRODUCTS.filter((p) => !p.hero && p.category === activeFilter);
  }, [activeFilter]);

  return (
    <Section aria-label="Featured products" className="relative overflow-hidden">
      {/* Subtle background glow */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[400px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle
            title="Featured Products"
            subtitle="A selection of AI-powered applications, business systems, and software solutions designed to solve real-world problems."
            align="center"
          />
        </motion.div>

        {/* Hero product */}
        {heroProduct && <HeroProduct product={heroProduct} />}

        {/* Filter + grid */}
        <div className="mt-16">
          <FilterBar active={activeFilter} onChange={setActiveFilter} />
          <ProductGrid products={filteredProducts} />
        </div>
      </Container>
    </Section>
  );
}