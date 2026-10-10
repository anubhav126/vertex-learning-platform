import { cn } from '@/lib/utils';
import { BarChart3, Clock, Layers } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  modules: number;
  icon?: React.ReactNode;
  className?: string;
}

export function CourseCard({
  title,
  description,
  level,
  duration,
  modules,
  icon,
  className,
}: CourseCardProps) {
  return (
    <Card className={cn('flex gap-4', className)}>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-neutral-900 text-white">
        {icon ?? <Layers size={20} />}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-heading-3 text-neutral-900 truncate">{title}</h3>
        <p className="mt-1 text-body text-neutral-500 line-clamp-2">{description}</p>
        <div className="mt-3 flex items-center gap-4 text-small text-neutral-500">
          <span className="inline-flex items-center gap-1">
            <BarChart3 size={14} aria-hidden="true" />
            {level}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} aria-hidden="true" />
            {duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <Layers size={14} aria-hidden="true" />
            {modules} modules
          </span>
        </div>
      </div>
    </Card>
  );
}
