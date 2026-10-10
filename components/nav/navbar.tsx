import { cn } from '@/lib/utils';
import { Logo } from '@/components/brand/logo';

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

interface NavbarProps {
  links?: NavLink[];
  className?: string;
}

export function Navbar({ links = [], className }: NavbarProps) {
  return (
    <nav className={cn('flex items-center gap-8 border-b border-neutral-200 px-6 py-4', className)}>
      <Logo size="md" />
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              'text-body font-medium transition-colors',
              link.active
                ? 'text-primary-500'
                : 'text-neutral-900 hover:text-primary-500',
            )}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
