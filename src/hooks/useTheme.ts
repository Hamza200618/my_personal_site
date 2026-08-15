import { useContext } from 'react';
import { ThemeContext } from '@/context/theme-context';

/**
 * useTheme — access the current theme and theme controls.
 * Must be used within a ThemeProvider.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}