import { cn } from '@/lib/utils';

const sizes = { sm: 24, md: 32, lg: 40 };

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  className?: string;
}

export function Logo({ size = 'md', showWordmark = true, className }: LogoProps) {
  const s = sizes[size];
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg
        width={s}
        height={s}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="4" fill="#F97316" />
        <path
          d="M8 8L16 24L24 8H19.5L16 16L12.5 8H8Z"
          fill="white"
        />
      </svg>
      {showWordmark && (
        <span className={cn(
          'font-display font-bold text-neutral-900',
          size === 'sm' && 'text-lg',
          size === 'md' && 'text-xl',
          size === 'lg' && 'text-2xl',
        )}>
          Vertex
        </span>
      )}
    </div>
  );
}
