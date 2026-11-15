'use client';

import React from 'react';

import { ArrowLeft, ArrowRight } from 'lucide-react';

interface IScrollRowProps {
  label: string;
  children: React.ReactNode;
  /** Render prev/next buttons; with `controlsSlot` they go in that element instead of above the row. */
  showPrev?: boolean;
  className?: string;
}

/** Horizontal scroll-snap row with arrow buttons that page by one card. */
export function ScrollRow({ label, children, showPrev = false, className = '' }: IScrollRowProps) {
  const ref = React.useRef<HTMLUListElement>(null);

  const page = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector('li');
    const step = card ? card.getBoundingClientRect().width + 30 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className={className}>
      <div className="mb-8 flex justify-end gap-3">
        {showPrev && (
          <button
            type="button"
            onClick={() => page(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-white text-white hover:bg-white hover:text-navy"
            aria-label={`Previous ${label}`}>
            <ArrowLeft className="h-5 w-5" />
          </button>
        )}
        <button
          type="button"
          onClick={() => page(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-white text-white hover:bg-white hover:text-navy"
          aria-label={`Next ${label}`}>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      <ul
        ref={ref}
        aria-label={label}
        className="flex snap-x snap-mandatory gap-[30px] overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {children}
      </ul>
    </div>
  );
}
