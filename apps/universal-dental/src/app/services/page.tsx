import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Pill } from '@/components/button';
import { ContactCta, PageHero, PlayBadge } from '@/components/sections';
import { clinic } from '@/data/site';

export const metadata: Metadata = { title: 'Services' };

const overview = [
  { label: 'Dental Implants', href: '/services/dental-implants' },
  { label: 'Cosmetic Dentistry', href: '#cosmetic' },
  { label: 'General Dentistry', href: '#general' },
  { label: 'Emergency Dentistry', href: '#emergency' },
];

const cosmetic = ['Smile Makeover', 'Invisalign®', 'Veneers', 'Direct Bonding', 'Crowns & Bridges', 'Teeth Whitening', 'Orofacial Harmonization'];
const general = [
  'Teeth Cleaning',
  'TMJ Treatment',
  'Oral Cancer',
  'Esthetic Fillings',
  'Periodontal',
  'Root Canal Therapy',
  'Surgical Procedures',
  'Tooth Extractions',
  'Sedation Dentistry',
  'Laser Dentistry',
];

const testimonials = [
  { name: 'Dorothy', image: '/images/review-video.webp' },
  { name: 'Linda', image: '/images/review-video-2.webp' },
  { name: 'Martin', image: '/images/review-video-3.webp' },
];
const testimonialText =
  '“What has impressed me the most in the 4 years I have been visiting this dentist is how they take the time to explain and really care about patient outcomes and satisfaction. Dr. Muazz was very professional and thorough.”';

function Bullet({ dark = false }: { dark?: boolean }) {
  return (
    <span
      aria-hidden
      className={`mt-[9px] inline-block h-3 w-3 shrink-0 rounded-full border-[3px] ${dark ? 'border-white/40 bg-white' : 'border-sky/30 bg-sky'}`}
    />
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/hero-services.webp"
        imageAlt="A dentist and assistant treating a patient"
        eyebrow="Services"
        title="You’re in good hands"
        subtitle="Everyone deserves the chance to have a beautiful and healthy smile"
        overlay={0.16}
      />

      {/* Overview */}
      <section className="relative overflow-hidden py-20 text-white">
        <div className="bg-stars-blue absolute inset-0" aria-hidden />
        <div className="absolute inset-0 bg-navy/50" aria-hidden />
        <div className="container-site relative grid items-center gap-12 lg:grid-cols-[542px_1fr] lg:gap-[82px]">
          <div className="relative aspect-square overflow-hidden rounded-[60px]">
            <Image src="/images/services-intro.webp" alt="Dr. Muazz in the treatment room" fill sizes="(min-width: 1024px) 542px, 100vw" className="object-cover" />
            <PlayBadge className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div>
            <h2 className="font-serif text-[40px] lg:text-[48px]">Our Services</h2>
            <p className="mt-5 text-[17px] leading-7 font-light lg:text-[18px]">
              At Universal Dental, we take a comprehensive wellness approach to dental care. Our team pays close attention
              to your smile’s aesthetics, function, and structure and views your oral health through the lens of your
              overall wellbeing. By doing so, we’re able to not only reveal your very best smile but also help you avoid
              health concerns.
            </p>
            <ul className="mt-8 space-y-1">
              {overview.map((o) => (
                <li key={o.label}>
                  <Link
                    href={o.href}
                    className="group flex items-center justify-between border-b border-white/15 py-3 font-serif text-[18px] tracking-[0.2em] uppercase lg:text-[22px]">
                    {o.label}
                    <span className="h-3 w-3 rounded-full border-[3px] border-white/40 bg-white transition-transform group-hover:scale-125" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Dental implants */}
      <section className="bg-pattern-light">
        <div className="grid bg-white/65 lg:min-h-[650px] lg:grid-cols-[765fr_601fr]">
          <div className="flex items-center px-5 py-16 lg:pl-[141px] lg:pr-16">
            <div>
              <h2 className="font-serif text-[36px] text-blue lg:text-[42px]">Dental Implants</h2>
              <p className="mt-6 text-[17px] leading-7 font-light tracking-[0.01em] lg:text-[18px]">
                Dental implant surgery is a procedure that replaces tooth roots with metal, screwlike posts and
                substitutes damaged or missing teeth with artificial teeth that look and function much like natural ones.
                Dental implant surgery can offer a welcome alternative to dentures or bridgework that is no adequately
                fitted well and can offer an option when a lack of natural teeth roots don’t allow building dentures or
                bridgework tooth replacements.
              </p>
              <Pill href="/services/dental-implants" className="mt-9 min-w-[160px]">
                Learn more
              </Pill>
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <Image src="/images/svc-implants.webp" alt="A smiling dentist with a patient" fill sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Cosmetic */}
      <section id="cosmetic" className="scroll-mt-24 grid lg:min-h-[680px] lg:grid-cols-2">
        <div className="relative min-h-[360px]">
          <Image src="/images/svc-cosmetic.webp" alt="A patient smiling before her appointment" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="bg-stars-navy flex items-center px-5 py-16 text-white lg:px-[82px]">
          <div>
            <h2 className="font-serif text-[36px] lg:text-[42px]">Cosmetic Dentistry</h2>
            <p className="mt-6 text-[17px] leading-7 font-light lg:text-[18px]">
              Cosmetic dentistry is different from general dental care; it is both an art and science. Using cutting-edge
              techniques and advanced materials, our office proudly offers you a beautiful, natural smile and all the
              benefits that come with it.
            </p>
            <ul className="mt-8 grid gap-x-10 gap-y-2 text-[16px] font-semibold tracking-[0.02em] uppercase sm:grid-cols-2 lg:text-[18px]">
              {cosmetic.map((c) => (
                <li key={c} className="flex gap-3">
                  <Bullet dark />
                  {c}
                </li>
              ))}
            </ul>
            <Pill href="/contact" className="mt-10 min-w-[160px]">
              Learn more
            </Pill>
          </div>
        </div>
      </section>

      {/* General */}
      <section id="general" className="bg-pattern-light scroll-mt-24">
        <div className="grid bg-white/65 lg:min-h-[689px] lg:grid-cols-[765fr_601fr]">
          <div className="flex items-center px-5 py-16 lg:pl-[141px] lg:pr-16">
            <div>
              <h2 className="font-serif text-[36px] text-blue lg:text-[42px]">General Dentistry</h2>
              <p className="mt-6 text-[17px] leading-7 font-light tracking-[0.01em] lg:text-[18px]">
                General dentistry includes primary dental care and treatment of common dental diseases such as tooth
                decay, gingivitis, toothache due to myelitis, tooth decay, or periodontitis problems that cause bad breath
                and discomfort.
              </p>
              <ul className="mt-8 grid gap-x-10 gap-y-2 text-[16px] font-semibold tracking-[0.02em] text-blue uppercase sm:grid-cols-2 lg:text-[18px]">
                {general.map((g) => (
                  <li key={g} className="flex gap-3">
                    <Bullet />
                    {g}
                  </li>
                ))}
              </ul>
              <Pill href="/contact" className="mt-10 min-w-[160px]">
                Learn more
              </Pill>
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <Image src="/images/svc-general.webp" alt="A patient showing her smile" fill sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section id="emergency" className="scroll-mt-24 py-20 lg:py-[100px]">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[542px_1fr] lg:gap-[82px]">
          <div className="relative aspect-[542/487] overflow-hidden">
            <Image src="/images/svc-emergency.webp" alt="A woman holding her jaw in pain" fill sizes="(min-width: 1024px) 542px, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-[36px] text-blue lg:text-[42px]">Emergency Dentistry</h2>
            <p className="mt-6 text-[17px] leading-7 font-light text-ink lg:text-[18px]">
              Have you ever needed emergency dental treatment? Depending on the nature of the issue, you probably
              experienced extreme pain and went through a lot of inconvenience in the process. Let’s consider what you
              need to do if a dental emergency arises.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4">
              <Pill href="/contact" className="min-w-[160px]">
                Learn more
              </Pill>
              <Pill href={clinic.phoneHref} variant="navy" className="min-w-[280px]">
                Call us {clinic.phone}
              </Pill>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden py-20 text-white">
        <div className="bg-stars-blue absolute inset-0" aria-hidden />
        <div className="absolute inset-0 bg-sky/40" aria-hidden />
        <div className="relative mx-auto max-w-[1300px] px-5">
          <h2 className="text-center font-serif text-[36px] lg:text-[48px]">OUR PATIENTS LOVE US</h2>
          <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-[30px]">
            {testimonials.map((t) => (
              <li key={t.name}>
                <figure>
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={t.image} alt={`Video review from ${t.name}`} fill sizes="(min-width: 768px) 400px, 100vw" className="object-cover" />
                    <PlayBadge className="bottom-4 left-4 !h-10 !w-10" />
                  </div>
                  <blockquote className="mt-6 px-5 text-[17px] leading-7 font-light tracking-[0.02em] italic">{testimonialText}</blockquote>
                  <figcaption className="mt-4 px-5 text-[18px] font-semibold">{t.name}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
