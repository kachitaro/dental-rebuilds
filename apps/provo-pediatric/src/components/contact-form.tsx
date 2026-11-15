'use client';

import React from 'react';

const field =
  'mt-2 block w-full rounded-md border border-transparent bg-[#f4f4f4] px-3.5 py-2.5 text-[16px] font-medium text-ink outline-none transition-colors focus:border-teal focus:bg-white';
const label = 'block text-[16px] font-semibold text-ink';

/** Demo form: same fields as the design, shows a confirmation instead of sending. */
export function ContactForm() {
  const [isSent, setSent] = React.useState(false);

  if (isSent) {
    return (
      <div role="status" className="py-16 text-center">
        <p className="font-script text-[40px] text-blue">Thank you!</p>
        <p className="mt-3 text-[16px] text-muted">
          This is a portfolio rebuild, so nothing was sent. On the live site the office would reach out the way you
          chose.
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
      className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
      <label className={label}>
        First Name*
        <input required name="firstName" autoComplete="given-name" className={field} />
      </label>
      <label className={label}>
        Last Name*
        <input required name="lastName" autoComplete="family-name" className={field} />
      </label>
      <label className={label}>
        Email*
        <input required type="email" name="email" autoComplete="email" className={field} />
      </label>
      <label className={label}>
        Phone*
        <input required type="tel" name="phone" autoComplete="tel" className={field} />
      </label>
      <fieldset>
        <legend className={label}>Are You a Current Patient?</legend>
        <div className="mt-4 flex gap-8">
          {['Yes, I’m a patient', 'No'].map((v, i) => (
            <label key={v} className="flex items-center gap-2 text-[16px] font-medium">
              <input type="radio" name="current" value={v} defaultChecked={i === 1} className="h-4 w-4 accent-blue" />
              {v}
            </label>
          ))}
        </div>
      </fieldset>
      <label className={label}>
        How should we reach you?
        <select name="reach" className={field} defaultValue="Call me">
          <option>Call me</option>
          <option>Text me</option>
          <option>Email me</option>
        </select>
      </label>
      <label className={`${label} sm:col-span-2`}>
        Message*
        <textarea required name="message" rows={4} className={`${field} resize-y`} />
      </label>
      <div className="pt-2 text-center sm:col-span-2">
        <button type="submit" className="inline-flex min-h-[50px] min-w-[230px] items-center justify-center rounded-full bg-gold text-[15px] font-semibold tracking-[0.08em] text-white uppercase hover:bg-[#c2962a]">
          Send message
        </button>
      </div>
    </form>
  );
}
