import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition-colors dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-100',
        className,
      )}
    >
      {children}
    </div>
  );
}
