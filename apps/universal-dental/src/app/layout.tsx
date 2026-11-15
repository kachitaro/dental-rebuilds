import type { Metadata } from 'next';

import { DemoBanner } from '@/components/demo-banner';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Universal Dental, Art and Science (portfolio rebuild)',
    template: '%s | Universal Dental (portfolio rebuild)',
  },
  description:
    'A front-end rebuild of the Universal Dental website design, made for a developer portfolio. Not the clinic’s official site.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only z-50 bg-white px-4 py-2 focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
          Skip to content
        </a>
        <DemoBanner />
        <div className="relative">
          <Header />
          <main id="main">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
