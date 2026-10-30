import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/search-input';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        'flex flex-col items-center px-6 pt-14 pb-14 md:pt-20 md:pb-20 md:px-12 text-center',
        className
      )}
    >
      {/* Eyebrow badge */}
      <div className="inline-flex items-center rounded-full bg-[#FFF6EE] border border-primary-200/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-600 select-none dark:bg-primary-950/40 dark:border-primary-800/60 dark:text-primary-400">
        INTELLIGENT LEARNING
      </div>

      {/* Main heading */}
      <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-[58px] font-bold leading-[1.15] tracking-tight text-neutral-900 max-w-2xl dark:text-neutral-50">
        Search your learning
        <br />
        in plain English.
      </h1>

      {/* Subtitle */}
      <p className="mt-5 max-w-xl text-base sm:text-lg md:text-[18px] md:leading-[1.7] text-neutral-500 font-normal dark:text-neutral-400">
        Vertex understands what you want to learn and
        <br className="hidden sm:inline" /> finds the exact lessons across all
        your courses.
      </p>

      {/* CTA Button */}
      <div className="mt-8">
        <Button
          href="/courses"
          size="xl"
          className="gap-2.5 rounded-md px-8 text-white shadow-sm hover:shadow transition-all"
        >
          <span>Explore Courses</span>
          <ArrowRight size={18} aria-hidden="true" />
        </Button>
      </div>

      {/* Search Input Bar */}
      <div className="mt-10 md:mt-12 w-full max-w-[840px]">
        <SearchInput
          size="lg"
          placeholder="Ask anything about your learning..."
        />
      </div>
    </section>
  );
}
