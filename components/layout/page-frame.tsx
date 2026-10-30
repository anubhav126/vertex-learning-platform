import { cn } from '@/lib/utils';

interface PageFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function PageFrame({ children, className }: PageFrameProps) {
  return (
    <div
      className={cn(
        'min-h-screen w-full bg-canvas text-neutral-900 flex flex-col transition-colors duration-150 dark:bg-[#0B0F17] dark:text-neutral-100',
        className
      )}
    >
      {children}
    </div>
  );
}
