import type { Metadata } from 'next';
import Image from 'next/image';

import { PageHero, Pill, Squiggle } from '@/components/ui';
import { services } from '@/data/site';

export const metadata: Metadata = { title: 'Services' };

// The design used lorem ipsum under these headings; the lines below are adapted from its own copy.
const features = [
  { icon: '/images/icon-friendly.png', title: 'Highly qualified dentists', text: 'Dr. Lund, Dr. Markham and Dr. Bott care for children from their first tooth to their teens.' },
  { icon: '/images/icon-designed.png', title: 'Full intensive services', text: 'From sealants and fillings to sedation and special needs care, all in one office.' },
  { icon: '/images/icon-education.png', title: 'Focus on your child health', text: 'Care that helps your child keep a healthy, strong smile for a lifetime.' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero image="/images/hero-services.webp" alt="A pediatric dentist showing a girl and her mother a model of teeth" title="Services" />

      <section className="relative overflow-hidden py-20 lg:py-24">
        <span className="absolute top-10 -right-[110px] h-[260px] w-[260px] rounded-full border-[40px] border-blush" aria-hidden />
        <div className="container-site relative text-center">
          <h2 className="heading">
            Children’s Dental Services
            <br />
            in Provo, UT
          </h2>
          <Squiggle className="mx-auto mt-6" />
          <p className="body-copy mx-auto mt-6 max-w-[900px]">
            Our greatest goal is to provide dentistry that leaves our patients feeling happy and confident in their oral
            health. We take great care in providing family-friendly care that helps your child achieve a healthy and
            long-lasting smile. If you would like to learn more about children’s dentistry, we welcome you to browse our
            services below.
          </p>
          <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-[35px]">
            {features.map((f) => (
              <li key={f.title} className="relative rounded-tr-[50px] rounded-bl-[50px] bg-cream px-6 pt-14 pb-8">
                <Image src={f.icon} alt="" width={144} height={144} className="absolute -top-9 left-1/2 h-[72px] w-[72px] -translate-x-1/2" />
                <h3 className="text-[20px] leading-[26px] font-medium">{f.title}</h3>
                <p className="mt-2 text-[16px] leading-7 text-muted">{f.text}</p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-16 max-w-[900px] font-script text-[30px] leading-[1.2] text-teal lg:text-[38px]">
            We offer comprehensive pediatric dentistry to help ensure that your child is on track to a healthier, happier
            smile.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <ul className="container-site">
          {services.map((s, i) => {
            const isFlipped = i % 2 === 1;
            return (
              <li key={s.slug} id={s.slug} className="grid scroll-mt-10 lg:grid-cols-2">
                <div className={`relative aspect-[542/310] overflow-hidden ${isFlipped ? 'lg:order-2' : ''}`}>
                  <Image src={s.image} alt="" fill sizes="(min-width: 1024px) 542px, 100vw" className="object-cover" />
                </div>
                <div className={`flex flex-col justify-center py-10 lg:py-6 ${isFlipped ? 'lg:pr-[50px]' : 'lg:pl-[50px]'}`}>
                  <h2 className="text-[26px] leading-tight font-semibold text-navy lg:text-[32px]">{s.title}</h2>
                  <p className="body-copy mt-3">{s.text}</p>
                  <Pill href={s.slug === 'dental-crowns' ? '/services/dental-crowns' : '/contact'} className="mt-6 w-fit !min-h-[40px] !px-8 !text-[14px]">
                    Learn more
                  </Pill>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
