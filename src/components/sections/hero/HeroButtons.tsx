import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github } from 'lucide-react';
import { Button } from '@/components/common/Button';

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.08,
      ease: 'easeOut' as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

/**
 * HeroButtons — action buttons for the hero section.
 * Composes the reusable Button with icons and entrance stagger.
 */
export function HeroButtons() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center gap-3"
    >
      <motion.div variants={itemVariants}>
        <Link to="/products" aria-label="Explore my products">
          <Button variant="primary" size="lg" className="group">
            Explore My Products
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Button>
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>
        <a href="/personal/Hamza_resume.pdf.pdf" download aria-label="Download resume">
          <Button variant="secondary" size="lg">
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </Button>
        </a>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link to="/contact" aria-label="Contact me">
          <Button variant="outline" size="lg">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact Me
          </Button>
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
        >
          <Button variant="ghost" size="lg">
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </Button>
        </a>
      </motion.div>
    </motion.div>
  );
}