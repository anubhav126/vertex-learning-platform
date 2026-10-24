import { cn } from '@/lib/utils';

interface MarkProps {
  className?: string;
  size?: number;
}

export function NextJsMark({ className, size = 72 }: MarkProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={cn(
        'flex items-center justify-center rounded-lg bg-black text-white shrink-0 overflow-hidden',
        className
      )}
      aria-label="Next.js"
    >
      <svg
        width={Math.round(size * 0.6)}
        height={Math.round(size * 0.6)}
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <mask
          id="next-mask"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="180"
          height="180"
          style={{ maskType: 'alpha' }}
        >
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#next-mask)">
          <path
            d="M149.508 157.567L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.181 149.508 157.567Z"
            fill="white"
          />
          <path
            d="M115.82 54H127.933V126H115.82V54Z"
            fill="white"
          />
        </g>
      </svg>
    </div>
  );
}

export function DockerMark({ className, size = 72 }: MarkProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={cn(
        'flex items-center justify-center rounded-lg bg-[#EBF5FB] shrink-0 overflow-hidden',
        className
      )}
      aria-label="Docker"
    >
      <svg
        width={Math.round(size * 0.72)}
        height={Math.round(size * 0.72)}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Container boxes */}
        <rect x="9" y="19" width="4.5" height="4" rx="0.5" fill="#008FE6" />
        <rect x="14.5" y="19" width="4.5" height="4" rx="0.5" fill="#008FE6" />
        <rect x="20" y="19" width="4.5" height="4" rx="0.5" fill="#008FE6" />
        <rect x="14.5" y="14" width="4.5" height="4" rx="0.5" fill="#008FE6" />
        <rect x="20" y="14" width="4.5" height="4" rx="0.5" fill="#008FE6" />
        <rect x="20" y="9" width="4.5" height="4" rx="0.5" fill="#008FE6" />
        <rect x="25.5" y="19" width="4.5" height="4" rx="0.5" fill="#008FE6" />
        <rect x="25.5" y="14" width="4.5" height="4" rx="0.5" fill="#008FE6" />
        <rect x="31" y="19" width="4.5" height="4" rx="0.5" fill="#008FE6" />
        {/* Whale body */}
        <path
          d="M45.5 24.5C44.5 24.2 41 24.5 39 26.5C37.5 25.5 35.5 25 33 25C26 25 7 24 5 32C4 36 7 38 12 38C22 38 37 38 41 32C44 28 45 25 45.5 24.5Z"
          fill="#008FE6"
        />
        {/* Whale eye */}
        <circle cx="11.5" cy="30.5" r="1" fill="white" />
        {/* Whale tail / spout */}
        <path
          d="M41 24C41.5 22 43 20 45 19.5C44.5 21.5 44 23 43 24H41Z"
          fill="#008FE6"
        />
      </svg>
    </div>
  );
}

export function TypeScriptMark({ className, size = 72 }: MarkProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={cn(
        'flex items-center justify-center rounded-lg bg-[#3178C6] text-white shrink-0 overflow-hidden font-sans font-bold',
        className
      )}
      aria-label="TypeScript"
    >
      <span className="text-2xl tracking-tighter select-none font-semibold">
        TS
      </span>
    </div>
  );
}

