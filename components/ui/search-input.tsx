import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

interface SearchInputProps {
  id?: string;
  size?: 'md' | 'lg';
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  id = 'search-input',
  size = 'md',
  placeholder = 'Search anything...',
  className,
}: SearchInputProps) {
  const isLg = size === 'lg';

  return (
    <div className={cn('relative w-full', className)}>
      <label htmlFor={id} className="sr-only">
        Search
      </label>
      <Search
        size={isLg ? 22 : 18}
        className={cn(
          'absolute top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none dark:text-neutral-500',
          isLg ? 'left-5 md:left-6' : 'left-3'
        )}
        aria-hidden="true"
      />
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className={cn(
          'w-full border border-neutral-200 bg-white text-neutral-900 transition-colors',
          'placeholder:text-neutral-400',
          'focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400',
          'dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:border-primary-500',
          isLg
            ? 'h-16 md:h-[88px] rounded-md md:rounded-lg pl-14 md:pl-16 pr-16 md:pr-20 text-base md:text-[18px] shadow-sm'
            : 'h-[44px] rounded-md pl-10 pr-14 text-body'
        )}
      />
      <kbd
        className={cn(
          'absolute top-1/2 -translate-y-1/2 rounded-xs border border-neutral-200 bg-neutral-50 font-medium text-neutral-500 pointer-events-none select-none',
          'dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400',
          isLg
            ? 'right-4 md:right-6 px-2.5 py-1 text-xs md:text-sm'
            : 'right-3 px-1.5 py-0.5 text-[11px]'
        )}
      >
        ⌘ K
      </kbd>
    </div>
  );
}
