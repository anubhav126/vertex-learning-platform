import { cn } from '@/lib/utils';
import { BarChart3, Clock, Layers, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';

export interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  modules: number;
  icon?: React.ReactNode;
  layout?: 'row' | 'stacked';
  className?: string;
}

export function CourseCard({
  title,
  description,
  level,
  duration,
  modules,
  icon,
  layout = 'row',
  className,
}: CourseCardProps) {
  if (layout === 'stacked') {
    return (
      <Card
        className={cn(
          'flex flex-col h-full p-6 md:p-7 bg-white rounded-lg border border-neutral-200 shadow-sm transition-all duration-200 hover:shadow-md hover:border-neutral-300',
          'dark:border-neutral-800 dark:bg-neutral-900/90 dark:hover:border-neutral-700',
          className
        )}
      >
        <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-lg bg-neutral-50 overflow-hidden dark:bg-neutral-800/80">
          {icon ?? <Layers size={28} className="text-neutral-500 dark:text-neutral-400" />}
        </div>

        <div className="mt-5 flex-1 flex flex-col">
          <h3 className="font-display text-xl font-bold text-neutral-900 tracking-tight dark:text-neutral-50">
            {title}
          </h3>
          <p className="mt-2 text-sm text-neutral-500 line-clamp-2 leading-relaxed dark:text-neutral-400">
            {description}
          </p>

          <div className="mt-auto pt-6">
            <div className="border-t border-neutral-100 pt-4 flex items-center justify-between text-xs text-neutral-500 font-medium dark:border-neutral-800 dark:text-neutral-400">
              <span className="inline-flex items-center gap-1.5">
                <BarChart3 size={14} className="text-neutral-400 dark:text-neutral-500" aria-hidden="true" />
                {level}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} className="text-neutral-400 dark:text-neutral-500" aria-hidden="true" />
                {duration}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FileText size={14} className="text-neutral-400 dark:text-neutral-500" aria-hidden="true" />
                {modules} modules
              </span>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn('flex gap-4 dark:border-neutral-800 dark:bg-neutral-900/90', className)}>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-neutral-800">
        {icon ?? <Layers size={20} />}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-heading-3 text-neutral-900 truncate dark:text-neutral-50">{title}</h3>
        <p className="mt-1 text-body text-neutral-500 line-clamp-2 dark:text-neutral-400">{description}</p>
        <div className="mt-3 flex items-center gap-4 text-small text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center gap-1">
            <BarChart3 size={14} aria-hidden="true" className="dark:text-neutral-500" />
            {level}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} aria-hidden="true" className="dark:text-neutral-500" />
            {duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <Layers size={14} aria-hidden="true" className="dark:text-neutral-500" />
            {modules} modules
          </span>
        </div>
      </div>
    </Card>
  );
}
