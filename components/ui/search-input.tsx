'use client';

import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export function SearchInput({ placeholder = 'Search anything...', className }: SearchInputProps) {
  return (
    <div className={cn('relative', className)}>
      <label htmlFor="search-input" className="sr-only">Search</label>
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
        aria-hidden="true"
      />
      <input
        id="search-input"
        type="text"
        placeholder={placeholder}
        className={cn(
          'h-[44px] w-full rounded-md border border-neutral-200 bg-white pl-10 pr-14 text-body text-neutral-900',
          'placeholder:text-neutral-500',
          'focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400',
          'transition-colors',
        )}
      />
      <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xs border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-[11px] font-medium text-neutral-500">
        ⌘K
      </kbd>
    </div>
  );
}
