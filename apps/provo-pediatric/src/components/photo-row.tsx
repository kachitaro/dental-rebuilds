'use client';

import React from 'react';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const photos = [
  { src: '/images/social-1.webp', alt: 'Team members holding a newborn at the office' },
  { src: '/images/social-2.webp', alt: 'The team dressed in football jerseys for game day' },
  { src: '/images/social-3.webp', alt: 'Dr. Lund and a team member in matching T-shirts' },
  { src: '/images/social-4.webp', alt: 'The team posing outside the office' },
  { src: '/images/social-5.webp', alt: 'A hygienist making a balloon animal for a young patient' },
];

/** Full-bleed photo strip from the design's social section, scrollable with arrow buttons. */
export function PhotoRow() {
  const ref = React.useRef<HTMLUListElement>(null);
  const page = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * 290, behavior: 'smooth' });
  const arrow =
    'absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-muted shadow-md hover:text-blue';

  return (
    <div className="relative">
      <button type="button" onClick={() => page(-1)} className={`${arrow} left-4 lg:left-[30px]`} aria-label="Previous photos">
        <ArrowLeft className="h-5 w-5" />
      </button>
      <ul
        ref={ref}
        aria-label="Photos from our social media"
        className="flex snap-x gap-2.5 overflow-x-auto px-[calc(50%-640px)] [scrollbar-width:none] max-[1366px]:px-0 [&::-webkit-scrollbar]:hidden">
        {photos.map((p) => (
          <li key={p.src} className="relative h-[224px] w-[280px] shrink-0 snap-center overflow-hidden">
            <Image src={p.src} alt={p.alt} fill sizes="280px" className="object-cover" />
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => page(1)} className={`${arrow} right-4 lg:right-[30px]`} aria-label="Next photos">
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
