import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface SelectProps {
  options: { value: string; label: string }[];
  defaultValue?: string;
  label?: string;
  className?: string;
}

export function Select({ options, defaultValue, label, className }: SelectProps) {
  return (
    <div className={cn('relative', className)}>
      {label && (
        <label className="text-small text-neutral-700 mb-1 block">{label}</label>
      )}
      <div className="relative">
        <select
          defaultValue={defaultValue}
          className={cn(
            'h-[44px] w-full appearance-none rounded-md border border-neutral-200 bg-white pl-4 pr-10 text-body text-neutral-900',
            'focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400',
            'transition-colors cursor-pointer',
          )}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
