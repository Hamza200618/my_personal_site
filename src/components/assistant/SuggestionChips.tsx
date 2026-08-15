import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const SUGGESTIONS = [
  'Tell me about ExamMate AI',
  'What technologies does Hamza use?',
  'What AI services does NexusAI offer?',
  'Can Hamza build AI Agents?',
  'What is his education?',
  'Show certifications',
  'How can I contact Hamza?',
];

interface SuggestionChipsProps {
  onSelect: (question: string) => void;
}

/**
 * SuggestionChips — quick question chips shown above the chat input.
 */
export function SuggestionChips({ onSelect }: SuggestionChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {SUGGESTIONS.map((suggestion) => (
        <motion.button
          key={suggestion}
          type="button"
          onClick={() => onSelect(suggestion)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-text-secondary transition-colors hover:border-primary/40 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Sparkles className="h-3 w-3 text-primary" aria-hidden="true" />
          {suggestion}
        </motion.button>
      ))}
    </div>
  );
}