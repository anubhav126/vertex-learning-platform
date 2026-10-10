import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'text';
type ButtonSize = 'lg' | 'md';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-500 text-white hover:bg-primary-600 disabled:bg-primary-100 disabled:text-primary-300',
  secondary:
    'border border-primary-500 text-primary-500 bg-white hover:bg-primary-100 disabled:border-primary-200 disabled:text-primary-200',
  tertiary:
    'border border-neutral-200 text-neutral-900 bg-white hover:bg-neutral-50 disabled:text-neutral-300 disabled:border-neutral-100',
  text:
    'text-primary-500 hover:text-primary-600 disabled:text-primary-200',
};

const sizeStyles: Record<ButtonSize, string> = {
  lg: 'h-[44px] px-4 text-body-lg',
  md: 'h-[44px] px-3 text-body',
};

export function Button({
  variant = 'primary',
  size = 'lg',
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
    'disabled:cursor-not-allowed disabled:pointer-events-none',
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={cn(classes, disabled && 'pointer-events-none opacity-50')} aria-disabled={disabled || undefined}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={(props as ButtonAsButton).type ?? 'button'}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
