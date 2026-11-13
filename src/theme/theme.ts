export type Theme = 'light' | 'dark';

const storageKey = 'portfolio-theme';

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function initializeTheme() {
  let savedTheme: string | null = null;
  try {
    savedTheme = localStorage.getItem(storageKey);
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }
  const theme = savedTheme === 'light' || savedTheme === 'dark'
    ? savedTheme
    : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(theme);
}

export function persistTheme(theme: Theme) {
  applyTheme(theme);
  try {
    localStorage.setItem(storageKey, theme);
  } catch {
    // Keep the selected mode for this visit when storage is unavailable.
  }
}
