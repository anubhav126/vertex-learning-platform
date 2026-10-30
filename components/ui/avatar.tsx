import { cn } from '@/lib/utils';
import Image from 'next/image';

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: number;
  className?: string;
}

export function Avatar({
  src,
  alt = 'User avatar',
  initials = 'JD',
  size = 44,
  className,
}: AvatarProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center rounded-full overflow-hidden bg-neutral-200 border border-neutral-300/40 select-none dark:bg-neutral-800 dark:border-neutral-700',
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          className="object-cover"
        />
      ) : (
        <span className="text-sm font-semibold text-neutral-700 uppercase dark:text-neutral-200">
          {initials}
        </span>
      )}
    </div>
  );
}

