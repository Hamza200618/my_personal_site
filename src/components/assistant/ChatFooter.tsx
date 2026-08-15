import { Sparkles } from 'lucide-react';

/**
 * ChatFooter — footer for the Hamza AI chat window.
 * Displays the disclaimer about the AI assistant.
 */
export function ChatFooter() {
  return (
    <div className="border-t border-border bg-white/[0.02] px-4 py-2">
      <p className="flex items-center justify-center gap-1.5 text-center text-[10px] text-text-muted">
        <Sparkles className="h-3 w-3 text-primary" aria-hidden="true" />
        Hamza AI · Represents Syed Hamza Kamal · Powered by Groq
      </p>
    </div>
  );
}