import type { Metadata } from 'next';
import Image from 'next/image';

import { ContactForm } from '@/components/contact-form';
import { PageHero, Squiggle } from '@/components/ui';
import { phone } from '@/data/site';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <>
      <PageHero image="/images/office-tour.webp" alt="The Provo Pediatric Dentistry waiting room" title="Contact" height="lg:h-[400px]" />

      <section className="pt-20 text-center">
        <div className="container-site">
          <h2 className="heading">Send Us A Message Today!</h2>
          <Squiggle className="mx-auto mt-6" />
          <p className="body-copy mx-auto mt-6 max-w-[716px]">
            We are honored to serve the local community with friendly and energetic care. Our team offers a
            one-of-a-kind experience for you and your child to help you feel fully involved with your child’s smile
            adventure.
            <br />
            Call us at{' '}
            <a href={phone.href} className="font-semibold text-teal">
              {phone.label}
            </a>{' '}
            today to get started on your first visit!
          </p>
        </div>
      </section>

      {/* The form sits in an open envelope over an ocean band, as in the design. */}
      <section className="relative mt-12 pb-16">
        <div className="absolute inset-x-0 top-[200px] bottom-0 bg-ocean" aria-hidden>
          <div className="wave-top absolute inset-x-0 -top-[15px] h-4 bg-ocean" />
          <Image src="/images/deco-sea-blue-left.png" alt="" width={232} height={430} className="absolute top-[60px] left-0 hidden w-[232px] xl:block" />
          <Image src="/images/deco-sea-blue-right.png" alt="" width={271} height={430} className="absolute top-[60px] right-0 hidden w-[271px] xl:block" />
        </div>

        <div className="relative mx-auto max-w-[820px] px-4">
          {/* Back of the envelope */}
          <svg viewBox="0 0 820 274" preserveAspectRatio="none" className="absolute inset-x-4 bottom-0 h-[200px] w-[calc(100%-2rem)] sm:h-[274px]" aria-hidden>
            <path d="M0 50 L52 0 H768 L820 50 V274 H0Z" fill="#5cb7ce" />
          </svg>
          {/* The letter */}
          <div className="relative mx-auto mb-5 w-[87.4%] min-w-[300px] rounded-[10px] bg-[#f1dada] p-[15px] pb-0 max-sm:w-full">
            <div className="rounded-t-md bg-white px-6 pt-10 pb-[170px] text-left sm:px-11 sm:pb-[150px]">
              <ContactForm />
            </div>
          </div>
          {/* Front flaps, drawn over the bottom of the letter */}
          <svg viewBox="0 0 820 274" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-4 bottom-0 h-[200px] w-[calc(100%-2rem)] sm:h-[274px]" aria-hidden>
            <path d="M0 50 L410 218 L284 274 H0Z" fill="#9fd4e1" />
            <path d="M820 50 L410 218 L536 274 H820Z" fill="#9fd4e1" />
            <path d="M284 274 L410 218 L536 274Z" fill="#5cb7ce" />
          </svg>
        </div>
      </section>
    </>
  );
}
