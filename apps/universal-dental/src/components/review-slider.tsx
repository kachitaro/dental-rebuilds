'use client';

import React from 'react';

const reviews = [
  {
    name: 'Sample Patient A',
    text: 'Friendly staff, a calm office and a clear plan from the first visit. Every step of my treatment was explained before it started, and the results look great.',
  },
  {
    name: 'Sample Patient B',
    text: 'The team takes the time to answer questions and never rushes you. I always leave feeling well cared for.',
  },
];
// Placeholder reviews written for the portfolio rebuild; real patient names and quotes from the design were removed.

export function ReviewSlider() {
  const [index, setIndex] = React.useState(0);
  const review = reviews[index];

  return (
    <div>
      <figure className="border-l-2 border-white/40 pl-4 lg:pl-5" aria-live="polite">
        <svg viewBox="0 0 40 30" className="h-[26px] w-[34px] fill-sky" aria-hidden>
          <path d="M0 30V17Q0 5 12 0l3 4Q8 8 8 15h8v15zm22 0V17q0-12 12-17l3 4q-7 4-7 11h8v15z" />
        </svg>
        <blockquote className="mt-4 text-[17px] leading-7 font-light tracking-[0.04em] text-white italic lg:text-[18px]">
          {review.text}
        </blockquote>
        <figcaption className="mt-5 text-[18px] font-semibold text-white">{review.name}</figcaption>
      </figure>

      <div className="mt-12 flex items-center justify-between">
        <a
          href="#reviews"
          className="inline-flex min-h-[46px] items-center rounded-full border border-white px-6 text-[15px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-white hover:text-navy">
          More reviews
        </a>
        <div className="flex gap-4" role="group" aria-label="Choose review">
          {reviews.map((r, i) => (
            <button
              key={r.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Review by ${r.name}`}
              aria-pressed={i === index}
              className={`h-3 w-3 transition-colors ${i === index ? 'bg-white' : 'bg-white/35 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
