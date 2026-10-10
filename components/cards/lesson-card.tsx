import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface LessonCardProps {
  title: string;
  description: string;
  moduleLabel: string;
  className?: string;
}

export function LessonCard({
  title,
  description,
  moduleLabel,
  className,
}: LessonCardProps) {
  return (
    <Card className={cn('flex flex-col', className)}>
      <Badge variant="lesson">Lesson</Badge>
      <h3 className="mt-2 text-heading-3 text-neutral-900">{title}</h3>
      <p className="mt-1 text-body text-neutral-500 line-clamp-2">{description}</p>
      <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3">
        <span className="text-small text-neutral-500">{moduleLabel}</span>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-small font-medium text-primary-500 hover:text-primary-600"
        >
          View lesson
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    </Card>
  );
}
