import { cn } from '@/lib/utils';

const sizes = { sm: 24, md: 32, lg: 40 };

interface LogoMarkProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LogoMark({ size = 'md', className }: LogoMarkProps) {
  const s = sizes[size];
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 5L16 27L29 5H21.5L16 16.5L10.5 5H3Z"
        fill="#F97316"
      />
    </svg>
  );
}

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  className?: string;
}

export function Logo({ size = 'md', showWordmark = true, className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <LogoMark size={size} />
      {showWordmark && (
        <span
          className={cn(
            'font-display font-bold tracking-tight text-neutral-900 dark:text-neutral-50',
            size === 'sm' && 'text-lg',
            size === 'md' && 'text-xl',
            size === 'lg' && 'text-2xl',
          )}
        >
          Vertex
        </span>
      )}
    </div>
  );
}
