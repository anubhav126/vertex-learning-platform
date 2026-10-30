import { cn } from '@/lib/utils';

interface ChartDecorationProps {
  className?: string;
}

export function ChartDecoration({ className }: ChartDecorationProps) {
  // Height percentages representing the clusters seen in vertex-home.png
  const barHeights = [
    20, 32, 48, 68, 82, 75, 58, 42, 28, 18, 14, 18, 26, 38, 54, 74, 88, 80, 65, 48, 34, 22, 16,
  ];

  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative w-full h-36 md:h-48 overflow-hidden pointer-events-none select-none mt-auto',
        className
      )}
    >
      {/* Bars cluster */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-1.5 md:gap-2.5 xl:gap-3 px-6 xl:px-12 h-full opacity-70 dark:opacity-85">
        {barHeights.map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className="flex-1 max-w-[48px] xl:max-w-[56px] rounded-t-xs bg-gradient-to-t from-[#FB923C]/80 via-[#F97316]/40 to-transparent transition-all"
          />
        ))}
      </div>

      {/* Warm ambient bottom glow overlay */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FB923C]/20 via-[#FDBA74]/10 to-transparent blur-md" />
    </div>
  );
}

