import { Bot, Trash2 } from 'lucide-react';

interface ChatHeaderProps {
  onClear: () => void;
}

/**
 * ChatHeader — header for the Hamza AI chat window.
 * Shows the assistant identity, online status, and Groq badge.
 */
export function ChatHeader({ onClear }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-border bg-white/[0.03] px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
          <Bot className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-sm font-semibold text-text-primary">Hamza AI</h3>
          <p className="flex items-center gap-1.5 text-xs text-text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Online · Groq Powered
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onClear}
        aria-label="Clear conversation"
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-surface hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Trash2 className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}