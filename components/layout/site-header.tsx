import Link from 'next/link';
import { Bell } from 'lucide-react';
import { Logo } from '@/components/brand/logo';
import { Avatar } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { cn } from '@/lib/utils';

interface SiteHeaderProps {
  className?: string;
}

export function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        'w-full border-b border-canvas-line bg-canvas transition-colors duration-150 dark:border-neutral-800 dark:bg-[#0B0F17]',
        className
      )}
    >
      <div className="mx-auto flex h-20 md:h-24 w-full max-w-[1440px] items-center justify-between px-6 md:px-10 xl:px-12">
        <div className="flex items-center gap-6 md:gap-10">
          <Link
            href="/"
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded-sm"
            aria-label="Vertex home"
          >
            <Logo size="md" />
          </Link>

          <nav className="flex items-center gap-6 md:gap-8" aria-label="Main navigation">
            <Link
              href="/courses"
              className="text-sm md:text-base font-medium text-neutral-800 transition-colors hover:text-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded-sm dark:text-neutral-200 dark:hover:text-primary-400"
            >
              Courses
            </Link>
            <Link
              href="/my-learning"
              className="text-sm md:text-base font-medium text-neutral-800 transition-colors hover:text-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded-sm dark:text-neutral-200 dark:hover:text-primary-400"
            >
              My Learning
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          {/* Dark mode toggle */}
          <ThemeToggle />

          {/* Notifications bell */}
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-200/50 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <Bell size={20} aria-hidden="true" />
          </button>

          {/* User profile avatar */}
          <button
            type="button"
            aria-label="User profile"
            className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          >
            <Avatar size={44} initials="AL" alt="Alex Learner" />
          </button>
        </div>
      </div>
    </header>
  );
}
