import { cn } from '@/lib/utils';
import { CheckCircle, Lock, Play, Loader } from 'lucide-react';

type StatusVariant = 'in-progress' | 'completed' | 'now-playing' | 'locked';

interface StatusIndicatorProps {
  variant: StatusVariant;
  className?: string;
}

const config: Record<StatusVariant, { label: string; iconColor: string }> = {
  'in-progress': { label: 'In Progress', iconColor: 'text-primary-500' },
  completed: { label: 'Completed', iconColor: 'text-green-600' },
  'now-playing': { label: 'Now Playing', iconColor: 'text-primary-500' },
  locked: { label: 'Locked', iconColor: 'text-neutral-500' },
};

const icons: Record<StatusVariant, typeof CheckCircle> = {
  'in-progress': Loader,
  completed: CheckCircle,
  'now-playing': Play,
  locked: Lock,
};

export function StatusIndicator({ variant, className }: StatusIndicatorProps) {
  const { label, iconColor } = config[variant];
  const Icon = icons[variant];
  const isFilled = variant === 'now-playing';

  return (
    <div className={cn('inline-flex items-center gap-1.5 text-body', className)}>
      <Icon
        size={16}
        className={iconColor}
        fill={isFilled ? 'currentColor' : 'none'}
        aria-hidden="true"
      />
      <span className="text-neutral-700">{label}</span>
    </div>
  );
}
