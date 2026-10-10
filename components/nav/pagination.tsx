import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  className?: string;
}

export function Pagination({ currentPage, totalPages, className }: PaginationProps) {
  const pages = buildPageNumbers(currentPage, totalPages);

  return (
    <nav aria-label="Pagination" className={cn('flex items-center gap-1', className)}>
      <a
        href="#"
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-50',
          currentPage === 1 && 'pointer-events-none opacity-40',
        )}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </a>

      {pages.map((page, i) =>
        page === '...' ? (
          <span key={`ellipsis-${i}`} className="flex h-9 w-9 items-center justify-center text-neutral-500">
            …
          </span>
        ) : (
          <a
            key={page}
            href="#"
            aria-current={page === currentPage ? 'page' : undefined}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-md text-body font-medium transition-colors',
              page === currentPage
                ? 'border border-primary-500 text-primary-500'
                : 'text-neutral-700 hover:bg-neutral-50',
            )}
          >
            {page}
          </a>
        ),
      )}

      <a
        href="#"
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-50',
          currentPage === totalPages && 'pointer-events-none opacity-40',
        )}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </a>
    </nav>
  );
}

function buildPageNumbers(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | '...')[] = [1];
  if (current > 3) pages.push('...');
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    pages.push(i);
  }
  if (current < total - 2) pages.push('...');
  pages.push(total);
  return pages;
}
