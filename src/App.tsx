import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/context/ThemeContext';
import { AIAssistant } from '@/components/assistant/AIAssistant';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { SkipToContent } from '@/components/common/SkipToContent';
import { NetworkStatus } from '@/components/common/NetworkStatus';
import { WelcomePopup } from '@/components/common/WelcomePopup';
import { router } from '@/routes';

/**
 * App — root component.
 * Composes global providers: theme, SEO (Helmet), toast notifications, error boundary, and the AI assistant.
 */
export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <SkipToContent />
          <NetworkStatus />
          <WelcomePopup />
          <RouterProvider router={router} />
          <AIAssistant />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border)',
              },
            }}
          />
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  );
}