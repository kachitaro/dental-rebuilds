import Image from 'next/image';
import Link from 'next/link';

type Tone = 'gold' | 'blue' | 'teal';
const tones: Record<Tone, string> = {
  gold: 'bg-gold hover:bg-[#c2962a]',
  blue: 'bg-blue hover:bg-navy',
  teal: 'bg-teal hover:bg-[#46a3bb]',
};

export function Pill({ href, children, tone = 'gold', className = '' }: { href: string; children: React.ReactNode; tone?: Tone; className?: string }) {
  const cls = `inline-flex min-h-[50px] items-center justify-center whitespace-nowrap rounded-full px-7 text-[15px] font-semibold uppercase tracking-[0.08em] text-white transition-colors ${tones[tone]} ${className}`;
  return href.startsWith('tel:') || href.startsWith('http') ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** The teal hand-drawn wave the design puts under section headings. */
export function Squiggle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 108 12" className={`h-3 w-[108px] ${className}`} aria-hidden>
      <path
        d="M2 7c6-6 12-6 18 0s12 6 18 0 12-6 18 0 12 6 18 0 12-6 18 0 12 6 14 0"
        fill="none"
        stroke="#5cb7ce"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface IPageHeroProps {
  image: string;
  alt: string;
  title: string;
  height?: string;
  children?: React.ReactNode;
}

export function PageHero({ image, alt, title, height = 'lg:h-[560px]', children }: IPageHeroProps) {
  return (
    <section className={`relative flex min-h-[360px] items-center justify-center overflow-hidden ${height}`}>
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/15" aria-hidden />
      <div className="relative z-10 px-5 pt-16 text-center text-white">
        <h1 className="font-script text-[56px] leading-none drop-shadow-sm lg:text-[72px]">{title}</h1>
        {children}
      </div>
    </section>
  );
}

export function PlayButton({ className = '' }: { className?: string }) {
  return (
    <span aria-hidden className={`absolute flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-md ${className}`}>
      <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 fill-gold">
        <path d="M6 3.5v17l14-8.5z" />
      </svg>
    </span>
  );
}
