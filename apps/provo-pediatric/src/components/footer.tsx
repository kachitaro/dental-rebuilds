import { ArrowUp, ExternalLink, MapPin } from 'lucide-react';
import Image from 'next/image';

import { locations } from '@/data/site';

import { Pill, Squiggle } from './ui';

export function Footer() {
  return (
    <footer id="locations" className="scroll-mt-10 bg-mist">
      <section className="relative overflow-hidden pt-[110px] pb-[180px] text-center text-white lg:pb-[200px]">
        <Image src="/images/office-tour.webp" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/30" aria-hidden />
        <div className="relative px-5">
          <p className="font-script text-[44px] leading-none lg:text-[52px]">Contact Us Today!</p>
          <h2 className="mt-3 text-[30px] leading-tight font-bold lg:text-[42px]">Restoring your smile’s health</h2>
          <Squiggle className="mx-auto mt-5 [&_path]:stroke-white" />
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Pill href="/contact" className="min-w-[250px]">
              Book Appointment
            </Pill>
            <Pill href="/contact" tone="teal" className="min-w-[250px]">
              Send Us A Question
            </Pill>
          </div>
        </div>
      </section>

      <div className="container-site relative -mt-[120px]">
        <div className="grid gap-10 rounded-md bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)] md:grid-cols-2 md:gap-[60px] lg:p-[30px]">
          {locations.map((l) => (
            <article key={l.name}>
              <a href={l.mapsUrl} className="relative block aspect-[482/271] overflow-hidden" aria-label={`Open ${l.name} in Google Maps`}>
                <Image src={l.map} alt="" fill sizes="(min-width: 768px) 482px, 100vw" className="object-cover" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <MapPin className={`h-10 w-10 text-white ${l.pin}`} aria-hidden />
                </span>
              </a>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className={`text-[18px] font-extrabold tracking-[0.05em] uppercase lg:text-[20px] ${l.tone}`}>{l.name}</h3>
                {l.name.startsWith('Price') && (
                  <span className="flex shrink-0 items-center gap-1 text-[14px] font-medium text-blue">
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    Visit Site
                  </span>
                )}
              </div>
              <div className="mt-3 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[17px] font-semibold text-[#aaa]">Contact us ━</p>
                  <p className="mt-2 text-[15px] leading-6 font-medium tracking-[0.02em] text-muted">
                    {l.address[0]}
                    <br />
                    {l.address[1]}
                  </p>
                  <a href={l.phoneHref} className="mt-2 inline-block text-[18px] font-semibold tracking-[0.02em] text-ink">
                    {l.phone}
                  </a>
                </div>
                <div>
                  <p className="text-[17px] font-semibold text-[#aaa]">Hours ━</p>
                  <ul className="mt-2 text-[14px] leading-6 whitespace-pre text-muted">
                    {l.hours.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="container-site flex items-center justify-between gap-4 py-8">
        <p className="flex-1 text-center text-[14px] text-muted">
          © Copyright 2021 Provo Pediatric Dentistry. All Rights Reserved - Privacy Policy - Website by PatientHoney.
        </p>
        <a href="#top" aria-label="Back to top" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal text-white shadow-md hover:bg-blue">
          <ArrowUp className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
