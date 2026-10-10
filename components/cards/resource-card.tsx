import { cn } from '@/lib/utils';
import { FileText, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ResourceCardProps {
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  className?: string;
}

export function ResourceCard({
  title,
  description,
  fileType,
  fileSize,
  className,
}: ResourceCardProps) {
  return (
    <Card className={cn('flex gap-4', className)}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-500">
        <FileText size={20} aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-heading-3 text-neutral-900 truncate">{title}</h3>
        <p className="mt-1 text-body text-neutral-500 line-clamp-2">{description}</p>
        <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3">
          <span className="text-small text-neutral-500">
            {fileType} · {fileSize}
          </span>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-small font-medium text-primary-500 hover:text-primary-600"
          >
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </Card>
  );
}
