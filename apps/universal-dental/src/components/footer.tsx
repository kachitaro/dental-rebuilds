import Image from 'next/image';
import Link from 'next/link';

import { clinic } from '@/data/site';

import { Logo } from './header';
import { SocialIcons } from './social-icons';

const footerLinks = [
  { href: '/#about', label: 'About Us' },
  { href: '/#doctors', label: 'Meet Our Team' },
  { href: '/services', label: 'Our Services' },
  { href: '/#patient-info', label: 'Patient Info' },
  { href: '/#reviews', label: 'Testimonials' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/#news', label: 'Blog' },
  { href: '/contact', label: 'BOOK APPOINTMENT' },
];

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[220px_190px_250px_1fr] lg:gap-10">
        <div className="flex flex-col items-center text-center">
          <Logo className="flex-col !gap-3" />
          <h2 className="mt-8 text-[15px] font-bold text-body">HOURS</h2>
          <ul className="mt-1 text-[14px] leading-[22px] tracking-[0.05em]">
            {clinic.footerHours.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <nav aria-labelledby="footer-nav">
          <h2 id="footer-nav" className="text-[15px] font-bold uppercase tracking-[0.25em] text-line">
            Navigation
          </h2>
          <ul className="mt-3 text-[16px] leading-[34px]">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-blue">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[15px] font-bold uppercase tracking-[0.25em] text-line">Contact us</h2>
          <address className="mt-3 not-italic">
            <p className="text-[16px] font-bold leading-6 tracking-[0.05em]">
              {clinic.address[0]}
              <br />
              {clinic.address[1]}
            </p>
            <a href={clinic.directionsUrl} className="mt-1 inline-block border-b border-body text-[16px] hover:text-blue">
              Get Directions ➤
            </a>
            <dl className="mt-4 space-y-3">
              <div>
                <dt className="text-[15px] font-bold text-[#aaa]">Phone:</dt>
                <dd>
                  <a href={clinic.phoneHref} className="text-[18px] font-bold tracking-[0.02em] text-blue">
                    {clinic.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[15px] font-bold text-[#aaa]">Fax:</dt>
                <dd className="text-[16px]">{clinic.fax}</dd>
              </div>
              <div>
                <dt className="text-[15px] font-bold text-[#aaa]">Email</dt>
                <dd>
                  <a href={`mailto:${clinic.email}`} className="text-[16px] tracking-[0.05em] hover:text-blue">
                    {clinic.email}
                  </a>
                </dd>
              </div>
            </dl>
          </address>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href={clinic.directionsUrl}
            className="relative block aspect-[3/2] w-full max-w-[348px] overflow-hidden border-r-4 border-b-4 border-card-line">
            <Image src="/images/map.webp" alt="Map showing Universal Dental in Irvine" fill sizes="348px" className="object-cover" />
          </a>
          <SocialIcons tone="muted" />
        </div>
      </div>
      <p className="border-t border-paper py-6 text-center text-[13px] tracking-[0.05em] text-muted">
        © 2021 Universal Dental. All Rights Reserved • Privacy Policy • Website by PatientHoney
      </p>
    </footer>
  );
}
