import { ArrowDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import { Pill } from '@/components/button';
import { ReviewSlider } from '@/components/review-slider';
import { ScrollRow } from '@/components/scroll-row';
import { ContactCta, PageHero, PlayBadge } from '@/components/sections';
import { SocialIcons } from '@/components/social-icons';

const doctors = [
  { name: 'Dr. Muazz Zendaki', image: '/images/doctor-muazz.webp' },
  { name: 'Dr. Donna M. West', image: '/images/doctor-donna.webp' },
  { name: 'Dr. Doctor Zendaki', image: '/images/doctor-3.webp' },
  { name: 'Dr. Doctor Zendaki', image: '/images/doctor-4.webp' },
];

const services = [
  {
    title: 'Dental Implants',
    href: '/services/dental-implants',
    image: '/images/svc-implants.webp',
    text: 'Dental implant surgery is a procedure that replaces tooth roots with metal, screwlike posts and substitutes damaged or missing teeth with artificial teeth that look and function much…',
  },
  {
    title: 'General Dentistry',
    href: '/services#general',
    image: '/images/svc-general.webp',
    text: 'General dentistry includes primary dental care and treatment of common dental diseases such as tooth decay, gingivitis, toothache due to myelitis, tooth decay…',
  },
  {
    title: 'Laser Dentistry',
    href: '/services#general',
    image: '/images/svc-laser.webp',
    text: 'Laser therapy in dentistry helps patients to have a more comfortable dental treatment experience. Using laser dentistry, your dentist can deliver a precise treatment that is more…',
  },
  {
    title: 'Emergency Dentistry',
    href: '/services#emergency',
    image: '/images/svc-emergency.webp',
    text: 'Have you ever needed emergency dental treatment? Depending on the nature of the issue, you probably experienced extreme pain and went through a lot of inconvenience in the…',
  },
];

const news = [
  { title: 'What Is A Dental Implant And What Is It Used For?', image: '/images/svc-implants.webp' },
  { title: '5 Reasons You Need To Replace Missing Teeth', image: '/images/news-2.webp' },
  { title: 'The Difference Between At Home And Professional Whitening', image: '/images/news-3.webp' },
];

const social = ['/images/social-1.webp', '/images/social-2.webp', '/images/social-3.webp', '/images/social-4.webp', '/images/new-patient-forms.webp'];

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <PageHero
          image="/images/hero-home.webp"
          imageAlt="Dr. Muazz reviewing a dental scan with a patient"
          title="Art and Science"
          subtitle="Everyone deserves the chance to have a beautiful and healthy smile"
        />
        <a
          href="#about"
          aria-label="Scroll to introduction"
          className="absolute bottom-10 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-[1.5px] border-white text-white hover:bg-white/20 lg:bottom-[68px]">
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>

      {/* Intro */}
      <section id="about" className="scroll-mt-24 py-20 lg:py-[90px]">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[1fr_512px] lg:gap-[60px]">
          <div>
            <h2 className="heading-serif text-[40px] lg:text-[48px]">Universal Dental</h2>
            <p className="eyebrow-tracked mt-5 text-[16px] leading-7 text-sky uppercase lg:text-[18px]">
              We believe you’ll feel better when you have our undivided attention.
            </p>
            <div className="mt-5 space-y-3 text-[17px] leading-7 font-light lg:text-[18px]">
              <p>
                Welcome to our office, where you will receive the care and attention you deserve. We are a
                state-of-the-art dental office, and we desire each patient to have a beautiful, healthy smile that will
                last time!
              </p>
              <p>
                At Universal Dental, our goal is to provide exceptional, comprehensive dental care to our patients in a
                friendly and caring environment, educating and encouraging them toward a state of optimal oral health.
                We have very convenient hours to cater to the needs of our patients. We welcome you and your entire
                family to join our dental family.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-5">
              <Pill href="/#doctors" className="min-w-[230px]">
                About us
              </Pill>
              <Pill href="/#patient-info" className="min-w-[256px]">
                New patient forms
              </Pill>
            </div>
          </div>
          <div className="relative aspect-square w-full overflow-hidden">
            <Image src="/images/office-video.webp" alt="Dr. Muazz walking through the office with a team member" fill sizes="(min-width: 1024px) 512px, 100vw" className="object-cover" />
            <PlayBadge className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* Experience the difference */}
      <section className="bg-pattern-light relative">
        <div className="grid lg:min-h-[650px] lg:grid-cols-2">
          <div className="relative min-h-[360px]">
            <Image src="/images/family-friendly.webp" alt="Dentist and assistant photographing a patient’s smile" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-navy/10" aria-hidden />
          </div>
          <div className="flex items-center bg-white/65 px-5 py-16 lg:px-[70px]">
            <div className="max-w-[470px]">
              <h2 className="heading-serif text-[32px] lg:text-[36px]">Experience The Difference</h2>
              <p className="mt-1 font-script text-[46px] leading-tight text-sky lg:text-[56px]">#Family Friendly</p>
              <p className="mt-8 text-[17px] leading-7 font-light tracking-[0.01em] lg:text-[18px]">
                At Universal Dental, our goal is to provide exceptional, comprehensive dental care to our patients in a
                friendly and caring environment, educating and encouraging them toward a state of optimal oral health.
                We welcome you and your entire family to join our dental family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="bg-stars-blue scroll-mt-24 overflow-hidden pt-20 pb-16 text-white lg:pt-[110px] lg:pb-[70px]">
        <div className="container-site">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-serif text-[40px] leading-tight lg:text-[48px]">Our Doctors</h2>
              <p className="mt-4 max-w-[690px] text-[17px] leading-[30px] font-light lg:text-[18px]">
                Our team consists of caring, compassionate, and friendly dentists and staff who look forward to making
                your visit with us as pleasant and comfortable as possible!
              </p>
            </div>
          </div>
          <ScrollRow label="doctors" className="mt-2 lg:-mt-20 [&_ul]:-mr-5 lg:[&_ul]:mr-[calc(542px-50vw)]">
            {doctors.map((d, i) => (
              <li key={i} className="w-[280px] shrink-0 snap-start sm:w-[348px]">
                <div className="relative h-[230px] overflow-hidden sm:h-[278px]">
                  <Image src={d.image} alt={d.name} fill sizes="348px" className="object-cover object-top" />
                </div>
                <p className="mt-6 font-serif text-[22px]">{d.name}</p>
              </li>
            ))}
          </ScrollRow>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="scroll-mt-24 grid lg:min-h-[660px] lg:grid-cols-2">
        <div className="relative min-h-[380px]">
          <Image src="/images/review-video.webp" alt="A smiling patient recording a video review" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <PlayBadge className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="bg-stars-navy flex items-center px-5 py-16 lg:px-[82px]">
          <div className="w-full max-w-[460px]">
            <h2 className="mb-10 font-serif text-[40px] leading-[1.05] text-white lg:text-[48px]">
              What Our
              <br />
              Patients Say
            </h2>
            <ReviewSlider />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-[100px]">
        <div className="mx-auto max-w-[1300px] px-5">
          <h2 className="heading-serif text-center text-[40px] lg:text-[48px]">Our Services</h2>
          <p className="mx-auto mt-5 max-w-[900px] text-center text-[17px] leading-7 font-light lg:text-[18px]">
            Our extensive suite of dental services is catered to meet the needs of patients of all ages. We’d love to
            provide the highest quality care for your whole family, whether that means a routine check-up, a full-mouth
            restoration, or anything in between.
          </p>
          <ul className="mt-12 grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li key={s.title}>
                <a
                  href={s.href}
                  className="group flex h-full flex-col border-[3px] border-card-line/70 px-5 pt-5 transition-colors hover:border-sky">
                  <h3 className="text-[20px] leading-[35px] font-bold text-blue uppercase">{s.title}</h3>
                  <p className="mt-1 flex-1 text-[15px] leading-6 font-light text-muted">
                    {s.text} <ChevronRight className="inline h-4 w-4 text-sky" aria-hidden />
                  </p>
                  <div className="relative mt-4 aspect-[3/2] overflow-hidden">
                    <Image src={s.image} alt="" fill sizes="(min-width: 1024px) 250px, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-11 text-center">
            <Pill href="/services" className="min-w-[214px]">
              More services
            </Pill>
          </div>
        </div>
      </section>

      {/* Patient info */}
      <section id="patient-info" className="bg-stars-navy scroll-mt-24 py-20 text-white">
        <div className="container-site grid gap-14 md:grid-cols-2 md:gap-[60px]">
          {[
            {
              title: 'New Patient Forms',
              image: '/images/new-patient-forms.webp',
              alt: 'The Universal Dental waiting room',
              text: 'Save time waiting in our office by filling out necessary forms online. Feel free to give us a call if you have any questions.',
            },
            {
              title: 'Insurance',
              image: '/images/insurance.webp',
              alt: 'An assistant preparing a patient for treatment',
              text: 'Sometimes more involved dental procedures are necessary, and we understand that many of our patients are on a budget.',
            },
          ].map((item) => (
            <article key={item.title}>
              <div className="relative aspect-[512/329] overflow-hidden">
                <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 512px, 100vw" className="object-cover" />
              </div>
              <h3 className="mt-7 font-serif text-[30px] lg:text-[32px]">{item.title}</h3>
              <p className="mt-3 text-[17px] leading-7 font-light lg:text-[18px]">{item.text}</p>
              <Pill href="/contact" variant="outline-white" className="mt-7 min-w-[178px]">
                Learn more
              </Pill>
            </article>
          ))}
        </div>
      </section>

      {/* News */}
      <section id="news" className="scroll-mt-24">
        <div className="bg-stars-blue pt-[90px] pb-[200px]">
          <h2 className="text-center font-serif text-[40px] text-white lg:text-[48px]">Our news</h2>
        </div>
        <div className="container-site -mt-[150px]">
          <ul className="grid gap-9 md:grid-cols-3">
            {news.map((n) => (
              <li key={n.title}>
                <article>
                  <div className="relative aspect-[338/225] overflow-hidden bg-paper">
                    <Image src={n.image} alt="" fill sizes="(min-width: 768px) 338px, 100vw" className="object-cover" />
                  </div>
                  <h3 className="mt-6 text-[19px] leading-[30px] font-bold text-ink lg:text-[20px]">
                    {n.title}{' '}
                    <span className="ml-1 inline-flex h-5 w-5 translate-y-0.5 items-center justify-center rounded-full bg-blue align-baseline" aria-hidden>
                      <ChevronRight className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                    </span>
                  </h3>
                </article>
              </li>
            ))}
          </ul>
          <div className="relative mt-12 flex justify-center">
            <span className="absolute inset-x-0 top-1/2 h-px bg-line/60" aria-hidden />
            <Pill href="/#news" className="relative min-w-[210px]">
              View more news
            </Pill>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="relative pt-12 pb-16">
        <div className="absolute inset-x-0 bottom-0 h-[290px] bg-[#f6f6f6]" aria-hidden />
        <div className="container-site relative">
          <span className="mx-auto block h-[70px] w-px bg-ink/70" aria-hidden />
          <h2 className="heading-serif mt-10 text-center text-[32px] lg:text-[38px]">@Universal Dental</h2>
          <div className="mt-6 flex justify-center">
            <SocialIcons />
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-5">
            {social.map((src, i) => (
              <li key={src} className={`relative aspect-square overflow-hidden ${i === 4 ? 'hidden lg:block' : ''}`}>
                <Image src={src} alt="" fill sizes="(min-width: 1024px) 213px, 50vw" className="object-cover" />
              </li>
            ))}
          </ul>
          <p className="mt-6 pl-[18%] font-script text-[40px] text-sky lg:text-[46px]">Thank you!</p>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
