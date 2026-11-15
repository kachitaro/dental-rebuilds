import Image from 'next/image';

import { clinic } from '@/data/site';

import { Pill } from './button';

interface IPageHeroProps {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  overlay?: number;
  /** Text block horizontal position on desktop. */
  align?: 'center' | 'right';
  priority?: boolean;
}

/** Full-bleed photo hero; the header floats over its top edge. */
export function PageHero({ image, imageAlt, eyebrow, title, subtitle, overlay = 0.15, align = 'center', priority = true }: IPageHeroProps) {
  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden lg:h-[739px]">
      <Image src={image} alt={imageAlt} fill priority={priority} sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black" style={{ opacity: overlay }} aria-hidden />
      <div
        className={`relative z-10 w-full px-5 pt-32 pb-28 text-center text-white lg:pb-[150px] ${
          align === 'right' ? 'lg:ml-auto lg:w-1/2 lg:pr-16 lg:pb-[280px]' : ''
        }`}>
        {eyebrow && <p className="font-serif text-[18px] uppercase tracking-[0.2em] lg:text-[22px]">{eyebrow}</p>}
        <h1 className="font-script text-[46px] leading-[1.1] drop-shadow-sm lg:text-[64px]">{title}</h1>
        <p className="mx-auto mt-3 max-w-[500px] font-serif text-[16px] leading-[1.7] tracking-[0.1em] lg:text-[18px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section className="bg-stars-navy py-20 text-center text-white">
      <div className="container-site">
        <h2 className="font-serif text-[34px] leading-[1.35] lg:text-[48px]">
          Do you have any questions?
          <br />
          <a href="/contact" className="underline decoration-1 underline-offset-[10px] hover:text-[#cfe2f3]">
            Contact Us
          </a>{' '}
          today.
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-0">
          <Pill href="/contact" variant="sky" className="min-h-[50px] min-w-[280px] !font-bold">
            Request an appointment
          </Pill>
          <span className="mx-5 hidden text-2xl font-light text-white/80 sm:block" aria-hidden>
            ✕
          </span>
          <a
            href={clinic.phoneHref}
            className="inline-flex min-h-[50px] min-w-[280px] items-center justify-center gap-6 whitespace-nowrap px-6 rounded-full bg-white text-[15px] font-semibold uppercase tracking-[0.05em] text-blue hover:bg-paper">
            <span>Call us</span>
            <span className="font-bold">{clinic.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/** Decorative play badge over a still; the design used video embeds the rebuild doesn't have. */
export function PlayBadge({ className = '' }: { className?: string }) {
  return (
    <span aria-hidden className={`absolute flex h-[60px] w-[60px] items-center justify-center rounded-full bg-blue/90 ${className}`}>
      <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-none stroke-white stroke-2">
        <path d="M7 4.5v15l12-7.5-12-7.5z" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
