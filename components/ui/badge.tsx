import { cn } from '@/lib/utils';

type BadgeVariant = 'video' | 'lesson' | 'popular';

interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  video: 'bg-primary-100 text-primary-500',
  lesson: 'bg-indigo-50 text-indigo-600',
  popular: 'bg-primary-100 text-primary-500 font-semibold',
};

export function Badge({ variant, className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm px-2 py-0.5 text-[12px] font-medium uppercase tracking-wider',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
