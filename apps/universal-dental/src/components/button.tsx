import Link from 'next/link';

type Variant = 'blue' | 'sky' | 'navy' | 'white' | 'outline-white';

const variants: Record<Variant, string> = {
  blue: 'bg-blue text-white hover:bg-navy',
  sky: 'bg-sky text-white hover:bg-blue',
  navy: 'bg-navy text-white hover:bg-midnight',
  white: 'bg-white text-blue hover:bg-paper',
  'outline-white': 'border border-white text-white hover:bg-white hover:text-navy',
};

interface IPillProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

export function Pill({ href, children, variant = 'blue', className = '' }: IPillProps) {
  const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
  const cls = `inline-flex min-h-[46px] items-center whitespace-nowrap justify-center rounded-full px-8 text-center text-[15px] font-semibold uppercase tracking-[0.1em] transition-colors ${variants[variant]} ${className}`;
  if (isExternal) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
