'use client';

import React from 'react';

import { MapPin, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { locations, navLinks, phone } from '@/data/site';

export function Header() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <header className="relative z-40 bg-white">
      <div className="hidden bg-sky text-[15px] font-bold text-white md:block">
        <div className="mx-auto flex max-w-[1366px] justify-between gap-6 px-10 py-1.5">
          {locations.map((l) => (
            <a key={l.name} href={l.mapsUrl} className="flex items-center gap-1.5 hover:underline">
              <MapPin className="h-4 w-4 fill-white text-sky" aria-hidden />
              {l.short}: <span className="font-normal">{l.address.join(', ')}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-3 lg:px-0">
        <div className="hidden gap-4 text-[15px] font-medium text-muted lg:flex">
          <Link href="/#why" className="border-b border-muted/70 hover:text-blue">
            Patient forms
          </Link>
          <Link href="/#news" className="border-b border-muted/70 hover:text-blue">
            COVID-19 Update
          </Link>
        </div>
        <Link href="/" className="col-start-1 justify-self-start lg:col-start-2 lg:justify-self-center" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="Provo Pediatric Dental" width={179} height={88} priority className="h-[64px] w-auto lg:h-[88px]" />
        </Link>
        <div className="col-start-3 flex items-center justify-end gap-4">
          <a href={phone.href} className="hidden text-right leading-tight text-blue sm:block">
            <span className="block text-[14px] font-medium">Call us</span>
            <span className="text-[18px] font-semibold">{phone.label}</span>
          </a>
          <Link
            href="/contact"
            className="hidden rounded-full bg-blue px-5 py-3 text-[14px] font-semibold tracking-[0.08em] text-white uppercase hover:bg-navy sm:inline-block">
            Book Appointment
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-navy lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <nav aria-label="Main" className="hidden border-t border-mist lg:block">
        <ul className="flex justify-center gap-9 py-3 text-[15px] font-medium tracking-[0.04em] text-ink uppercase">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className={`hover:text-blue ${l.highlight ? 'text-blue' : ''}`}>
                {l.highlight ? <>✦ {l.label} ✦</> : l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-mist px-5 pb-6 lg:hidden">
          <ul>
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-mist py-3.5 text-[15px] font-semibold tracking-[0.05em] uppercase">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-3">
            <a href={phone.href} className="text-center text-lg font-semibold text-blue">
              Call us {phone.label}
            </a>
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded-full bg-blue py-3 text-center font-semibold tracking-[0.08em] text-white uppercase">
              Book Appointment
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
