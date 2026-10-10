import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface LessonVideoCardProps {
  title: string;
  description: string;
  lessonLabel: string;
  duration: string;
  timestamp?: string;
  className?: string;
}

export function LessonVideoCard({
  title,
  description,
  lessonLabel,
  duration,
  timestamp,
  className,
}: LessonVideoCardProps) {
  return (
    <Card className={cn('flex flex-col', className)}>
      <Badge variant="video">Video</Badge>
      <h3 className="mt-2 text-heading-3 text-neutral-900">{title}</h3>
      <p className="mt-1 text-body text-neutral-500 line-clamp-2">{description}</p>
      <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3">
        <span className="text-small text-neutral-500">
          {lessonLabel} · {duration}
        </span>
        {timestamp && (
          <a
            href="#"
            className="inline-flex items-center gap-1 text-small font-medium text-primary-500 hover:text-primary-600"
          >
            <Play size={14} fill="currentColor" aria-hidden="true" />
            Watch from {timestamp}
          </a>
        )}
      </div>
    </Card>
  );
}
