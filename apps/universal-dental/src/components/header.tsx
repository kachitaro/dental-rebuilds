'use client';

import React from 'react';

import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { clinic, navLinks } from '@/data/site';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image src="/images/logo-mark.png" alt="" width={53} height={60} className="h-12 w-auto lg:h-[60px]" priority />
      <span className="flex flex-col items-center gap-1.5">
        <Image src="/images/logo-wordmark.png" alt="Universal Dental" width={178} height={17} className="h-auto w-[150px] lg:w-[178px]" priority />
        <Image src="/images/logo-tagline.png" alt="Art and Science" width={109} height={18} className="h-auto w-[92px] lg:w-[109px]" priority />
      </span>
    </span>
  );
}

export function Header() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="bg-white/85 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-[1366px] items-center justify-between gap-6 px-5 lg:px-8">
          <Link href="/" aria-label="Universal Dental home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-[14px] font-medium uppercase tracking-[0.04em] text-ink">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="py-2 transition-colors hover:text-blue">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a href={clinic.phoneHref} className="flex items-center gap-1.5 text-[15px] font-bold tracking-[0.04em] text-ink">
              <Phone className="h-3.5 w-3.5 fill-current" aria-hidden />
              {clinic.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-blue px-4 py-2.5 text-[14px] font-bold uppercase tracking-[0.03em] text-white transition-colors hover:bg-navy">
              Book appointment
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <nav id="mobile-menu" aria-label="Main" className="border-t border-line/60 px-5 pb-6 lg:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line/40 py-3.5 text-[15px] font-semibold uppercase tracking-[0.06em] text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-3">
              <a href={clinic.phoneHref} className="text-center text-lg font-bold text-blue">
                {clinic.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-blue py-3 text-center text-[15px] font-bold uppercase tracking-[0.05em] text-white">
                Book appointment
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
