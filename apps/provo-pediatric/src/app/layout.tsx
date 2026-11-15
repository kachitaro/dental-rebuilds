import type { Metadata } from 'next';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { portfolioUrl } from '@/data/site';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Provo Pediatric Dentistry (portfolio rebuild)',
    template: '%s | Provo Pediatric Dentistry (portfolio rebuild)',
  },
  description:
    'A front-end rebuild of the Provo Pediatric Dentistry website design, made for a developer portfolio. Not the practice’s official site.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="top">
        <a href="#main" className="sr-only z-50 bg-white px-4 py-2 focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
          Skip to content
        </a>
        <div className="bg-navy px-5 py-2 text-center text-[13px] text-white/85">
          Portfolio rebuild of a 2022 client design from my time at Techbee Solutions. Not the practice&apos;s live
          site, and forms don&apos;t send anything.{' '}
          <a href={portfolioUrl} className="font-semibold text-white underline underline-offset-2">
            Back to portfolio
          </a>
        </div>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
