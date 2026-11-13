import { useState } from 'react';
import { persistTheme } from '../theme/theme';
import type { Theme } from '../theme/theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    persistTheme(nextTheme);
    setTheme(nextTheme);
  }

  return { theme, toggleTheme };
}
