import { useState } from 'react';
import { AIButton } from './AIButton';
import { ChatWindow } from './ChatWindow';

/**
 * AIAssistant — the Hamza AI floating assistant.
 * Composes the floating button and the chat window.
 */
export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <AIButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
    </>
  );
}