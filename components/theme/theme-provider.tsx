'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useSyncExternalStore,
} from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'vertex-theme';
const THEME_CHANGE_EVENT = 'vertex-theme-change';

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    if (val === 'light' || val === 'dark' || val === 'system') {
      return val;
    }
  } catch {
    // Ignore storage errors
  }
  return 'system';
}

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};

  const handleCustom = () => callback();
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleMedia = () => callback();

  window.addEventListener(THEME_CHANGE_EVENT, handleCustom);
  window.addEventListener('storage', handleStorage);
  mediaQuery.addEventListener('change', handleMedia);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, handleCustom);
    window.removeEventListener('storage', handleStorage);
    mediaQuery.removeEventListener('change', handleMedia);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore<Theme>(
    subscribe,
    getStoredTheme,
    () => 'system'
  );

  const isSystemDark = useSyncExternalStore(
    subscribe,
    () => {
      if (typeof window === 'undefined') return false;
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    },
    () => false
  );

  const resolvedTheme: ResolvedTheme =
    theme === 'system' ? (isSystemDark ? 'dark' : 'light') : theme;

  // Synchronize DOM with external system (no setState)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const setTheme = useCallback((newTheme: Theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // Ignore
    }
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = resolvedTheme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore
    }
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, [resolvedTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
