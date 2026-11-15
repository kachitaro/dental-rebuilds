'use client';

import React from 'react';

const field =
  'mt-2 block w-full border border-[#d6d6d6] bg-white px-4 py-3 text-[16px] text-ink outline-none transition-colors focus:border-sky';

/** Demo form: validates like the real one would, then shows a confirmation. Nothing is sent. */
export function ContactForm() {
  const [isSent, setSent] = React.useState(false);

  if (isSent) {
    return (
      <div role="status" className="mx-auto max-w-[720px] border border-card-line bg-white px-8 py-10 text-center">
        <p className="font-serif text-[28px] text-blue">Message received (demo)</p>
        <p className="mt-3 text-[16px] font-light">
          This is a portfolio rebuild, so nothing was sent. On the live site the clinic would reply by email.
        </p>
        <button type="button" onClick={() => setSent(false)} className="mt-6 text-[15px] font-semibold text-blue underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="mx-auto max-w-[720px] space-y-6">
      <label className="block text-[17px] font-semibold text-ink lg:text-[18px]">
        Name*
        <input required name="name" autoComplete="name" className={field} />
      </label>
      <label className="block text-[17px] font-semibold text-ink lg:text-[18px]">
        Email*
        <input required type="email" name="email" autoComplete="email" className={field} />
      </label>
      <label className="block text-[17px] font-semibold text-ink lg:text-[18px]">
        Phone*
        <input required type="tel" name="phone" autoComplete="tel" className={field} />
      </label>
      <fieldset className="flex flex-wrap items-center gap-x-10 gap-y-2">
        <legend className="float-left mr-10 text-[17px] font-semibold text-ink lg:text-[18px]">Are You A New Patient?*</legend>
        {['Yes', 'No'].map((v, i) => (
          <label key={v} className="flex items-center gap-2 text-[17px] lg:text-[18px]">
            <input type="radio" name="newPatient" value={v} defaultChecked={i === 0} className="h-4 w-4 accent-blue" />
            {v}
          </label>
        ))}
      </fieldset>
      <label className="block text-[17px] font-semibold text-ink lg:text-[18px]">
        How may we help you?*
        <textarea required name="message" rows={4} className={`${field} resize-y`} />
      </label>
      <div className="pt-4 text-center">
        <button
          type="submit"
          className="inline-flex min-h-[46px] w-[160px] items-center justify-center rounded-full bg-blue text-[15px] font-semibold uppercase tracking-[0.05em] text-white hover:bg-navy">
          Send
        </button>
      </div>
    </form>
  );
}
