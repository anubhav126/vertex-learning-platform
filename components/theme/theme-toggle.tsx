'use client';

import { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './theme-provider';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  size?: number;
}

const emptySubscribe = () => () => {};

export function ThemeToggle({ className, size = 20 }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors dark:text-neutral-300',
          className
        )}
      >
        <span className="h-5 w-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100',
        className
      )}
    >
      {isDark ? (
        <Sun
          size={size}
          className="transition-transform duration-200 hover:rotate-45 text-primary-400"
          aria-hidden="true"
        />
      ) : (
        <Moon
          size={size}
          className="transition-transform duration-200 hover:-rotate-12"
          aria-hidden="true"
        />
      )}
    </button>
  );
}

