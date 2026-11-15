import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { PhotoRow } from '@/components/photo-row';
import { SocialIcons } from '@/components/social-icons';
import { Pill, PlayButton, Squiggle } from '@/components/ui';

const why = [
  { icon: '/images/icon-designed.png', label: ['Designed with', 'You in Mind'] },
  { icon: '/images/icon-friendly.png', label: ['Friendly and', 'Gentle'] },
  { icon: '/images/icon-education.png', label: ['Education', 'and Prevention'] },
  { icon: '/images/icon-clean.png', label: ['Clean and', 'Safe Practice'] },
];

const tiles = [
  { title: 'Tongue-ties/Lip-ties', note: 'Focused on your child health', image: '/images/svc-tongue-tie.webp' },
  { title: 'Dental Fillings', note: 'Return your child’s smile', image: '/images/svc-fillings.webp' },
  { title: 'Extractions', note: 'Maintain a healthy smile', image: '/images/svc-extractions.webp' },
  { title: 'Weekend Emergencies', note: 'Contact us as soon as possible', image: '/images/svc-trauma.webp' },
  { title: 'Sedation Dentistry', note: 'Help your child stay calm', image: '/images/svc-sedation.webp' },
  { title: 'Retainers', note: 'Create facial symmetry by guiding jaw growth', image: '/images/svc-retainers.webp' },
  { title: 'Root Canal Therapy (for baby teeth)', note: 'Restoring your smile’s health', image: '/images/svc-root-canal.webp' },
  { title: 'Special Needs Dentistry', note: 'Focused on your health', image: '/images/svc-special-needs.webp' },
];

// The design shipped with lorem ipsum here; these lines restate the article titles instead.
const news = [
  {
    title: 'Covid-19 These infection control and safety',
    excerpt: 'How our office keeps young patients, parents and our team safe during every visit.',
    image: '/images/news-1.webp',
  },
  {
    title: 'What Happens After a Tooth Is Extracted?',
    excerpt: 'What to expect in the first few days after an extraction, and how to help your child heal.',
    image: '/images/news-2.webp',
  },
  {
    title: 'What Happens After a Tooth Is Extracted?',
    excerpt: 'What to expect in the first few days after an extraction, and how to help your child heal.',
    image: '/images/news-3.webp',
  },
];

function Stars() {
  return (
    <span className="tracking-[0.1em] text-gold" aria-hidden>
      ★★★★★
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden lg:h-[600px]">
        <Image
          src="/images/hero-home.webp"
          alt="A smiling girl talking with her pediatric dentist"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/15" aria-hidden />
        <div className="relative z-10 px-5 pt-24 text-center text-white">
          <h1 className="text-[30px] leading-tight font-bold lg:text-[38px]">Provo Pediatric Dentistry</h1>
          <p className="mt-2 font-script text-[50px] leading-none drop-shadow-sm lg:text-[72px]">We Focus on What Matters</p>
          <Pill href="/contact" className="mt-8 min-w-[230px]">
            Book Appointment
          </Pill>
        </div>
      </section>

      {/* Welcome */}
      <section id="about" className="relative scroll-mt-10 pt-20">
        <Image src="/images/jellyfish.png" alt="" width={218} height={261} className="absolute top-14 right-[5%] hidden w-[109px] md:block" />
        <Image src="/images/seahorse.png" alt="" width={180} height={251} className="absolute top-[330px] left-[4%] hidden w-[90px] lg:block" />
        <div className="container-site text-center">
          <p className="script-eyebrow">Welcome to</p>
          <h2 className="heading mt-2">Pediatric Dentist in Provo, Utah</h2>
          <Squiggle className="mx-auto mt-6" />
          <p className="body-copy mx-auto mt-6 max-w-[900px]">
            Our team is excited for the opportunity to welcome you and your child into our dental family at Provo
            Pediatric Dentistry. We offer comprehensive care for children to help them achieve smiles that remain
            healthy and strong for a lifetime. Our pediatric dentists, Dr. Lund, Dr. Markham and Dr. Bott, will work
            closely with our team to help walk you through every step of your child’s smile adventure!
          </p>
          <div className="relative z-10 mx-auto mt-12 max-w-[900px] bg-white/80 p-[5px] shadow-sm">
            <div className="relative aspect-[2/1] overflow-hidden">
              <Image src="/images/office-tour.webp" alt="The Provo Pediatric Dentistry waiting room" fill sizes="(min-width: 900px) 890px, 100vw" className="object-cover" />
              <PlayButton className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Social band */}
        <div className="relative -mt-[170px] bg-pink pt-[200px] pb-16">
          <div className="wave-top absolute inset-x-0 -top-[15px] h-4 bg-pink" aria-hidden />
          <Image src="/images/deco-sea-left.png" alt="" width={232} height={410} className="pointer-events-none absolute top-0 left-0 hidden w-[232px] lg:block" />
          <Image src="/images/deco-sea-right.png" alt="" width={346} height={380} className="pointer-events-none absolute top-0 right-0 hidden w-[346px] lg:block" />
          <Image src="/images/deco-coral.png" alt="" width={156} height={152} className="pointer-events-none absolute right-0 bottom-0 hidden w-[156px] lg:block" />
          <div className="relative text-center">
            <a href="#about" className="text-[16px] font-semibold tracking-[0.02em] text-navy hover:underline">
              Office Tour ➔
            </a>
            <h2 className="mt-14 px-5 font-script text-[38px] leading-tight text-navy lg:text-[48px]">
              Provo Pediatric Dentistry on Social Media
            </h2>
            <p className="mt-3 text-[16px] text-muted">Follow us on social media for our latest updates.</p>
          </div>
          <div className="relative mt-8">
            <PhotoRow />
          </div>
          <div className="relative mt-10">
            <SocialIcons />
          </div>
        </div>
      </section>

      {/* Best pediatric dentist */}
      <section className="relative overflow-hidden py-24 lg:py-[100px]">
        <span className="absolute top-[400px] -right-[90px] h-[240px] w-[240px] rounded-full border-[40px] border-blush" aria-hidden />
        <span className="absolute bottom-[-150px] -left-[150px] h-[300px] w-[300px] rounded-full border-[40px] border-[#eaf6f9]" aria-hidden />
        <div className="container-site relative grid items-center gap-16 lg:grid-cols-[512px_1fr] lg:gap-[60px]">
          <div className="relative">
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/best-dentist.webp" alt="A girl in the dental chair laughing with her dentist" fill sizes="(min-width: 1024px) 512px, 100vw" className="object-cover" />
            </div>
            <ul className="absolute -bottom-9 left-1/2 flex -translate-x-1/2 gap-5 lg:left-[110px] lg:translate-x-0">
              {[
                { score: '4.9', count: 'By 251+ reviews', logo: '/images/logo-google.png', name: 'Google', w: 76, h: 27 },
                { score: '5.0', count: 'By 69 reviews', logo: '/images/logo-facebook.png', name: 'Facebook', w: 86, h: 17 },
              ].map((r) => (
                <li key={r.name} className="w-[140px] rounded-md bg-white px-3 py-3 text-center shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
                  <p className="text-[32px] leading-none font-light text-ink">{r.score}</p>
                  <Stars />
                  <p className="text-[13px] text-muted">{r.count}</p>
                  <Image src={r.logo} alt={`${r.name} rating`} width={r.w} height={r.h} className="mx-auto mt-1 h-auto" />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="heading">
              Best Pediatric Dentist
              <br />
              For your child
            </h2>
            <Squiggle className="mt-6" />
            <p className="body-copy mt-6">
              Here at Provo Pediatric Dentistry, our team works diligently to provide you and your child with an
              excellent level of service for all your child’s oral health needs. We place great effort into delivering
              service that is reliable and trustworthy to help your child achieve an outstanding smile. If you would
              like to learn more about our dental office in Provo, Utah, we welcome you to contact us today at{' '}
              <a href="tel:+18013734200" className="font-semibold text-teal underline">
                801-373-4200
              </a>{' '}
              and set up an appointment with our pediatric dentists!
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Pill href="/#why" className="min-w-[200px]">
                About Us
              </Pill>
              <Pill href="/#doctor" className="min-w-[200px]">
                Meet Our Team
              </Pill>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section id="why" className="scroll-mt-10 pb-24">
        <div className="container-site">
          <div className="text-center">
            <p className="script-eyebrow">Why Choose</p>
            <h2 className="heading mt-2">Provo Pediatric Dentistry</h2>
            <p className="body-copy mx-auto mt-6 max-w-[900px]">
              We offer a range of general dentistry treatment options and focus on creating an environment of
              unsurpassed customer service from the moment you join our dental care family.
            </p>
          </div>
          <ul className="mt-12 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <li key={w.icon} className="pb-4">
                <div className="flex items-center gap-4">
                  <Image src={w.icon} alt="" width={144} height={144} className="h-14 w-14 lg:h-[72px] lg:w-[72px]" />
                  <p className="text-[16px] leading-[26px] font-medium lg:text-[18px]">
                    {w.label[0]}
                    <br />
                    {w.label[1]}
                  </p>
                </div>
                <span className={`mt-5 block h-1 rounded-full ${i === 0 ? 'bg-teal' : 'bg-mist'}`} aria-hidden />
              </li>
            ))}
          </ul>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 [&>*]:min-w-0">
            <div>
              <h3 className="font-script text-[36px] text-blue lg:text-[42px]">Designed with You in Mind</h3>
              <p className="body-copy mt-4 max-w-[480px]">
                We are honored to serve the local community with friendly and energetic care. Our team offers a
                one-of-a-kind experience for you and your child to help you feel fully involved with your child’s
                smile adventure. Call us today to get started on your first visit!
              </p>
              <Pill href="/contact" className="mt-8 min-w-[240px]">
                Book Appointment
              </Pill>
            </div>
            <div className="relative mx-auto h-[220px] w-full max-w-[532px] sm:h-[362px]">
              <div className="absolute top-0 right-0 aspect-square h-full overflow-hidden rounded-full">
                <Image src="/images/office-tour.webp" alt="The office hallway" fill sizes="362px" className="object-cover" />
              </div>
              <div className="absolute top-0 left-0 aspect-square h-full overflow-hidden rounded-full border-4 border-white">
                <Image src="/images/social-3.webp" alt="Dr. Lund and a team member in matching T-shirts" fill sizes="362px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream py-24">
        <div className="text-center">
          <p className="script-eyebrow">Our Services</p>
          <h2 className="heading mt-2 px-5">We provide care to children</h2>
          <Squiggle className="mx-auto mt-6" />
        </div>
        <ul className="mx-auto mt-12 grid max-w-[1286px] gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => (
            <li key={t.title}>
              <Link href="/services" className="group relative flex aspect-[306/245] items-end justify-center overflow-hidden text-center text-white">
                <Image src={t.image} alt="" fill sizes="(min-width: 1024px) 306px, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" aria-hidden />
                <span className="relative px-4 pb-6">
                  <span className="block text-[20px] leading-tight font-semibold uppercase lg:text-[22px]">{t.title}</span>
                  <span className="mt-1 block font-script text-[22px] leading-tight lg:text-[24px]">{t.note}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Pill href="/services" className="min-w-[200px]">
            More Services
          </Pill>
        </div>
      </section>

      {/* Doctor */}
      <section id="doctor" className="scroll-mt-10 bg-navy py-20 text-white lg:py-[90px]">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[480px_1fr] lg:gap-[70px]">
          <div className="relative mx-auto w-full max-w-[437px] lg:ml-[46px]">
            <span className="absolute top-2 left-0 h-14 w-14 rounded-full bg-[#f3dfe0]" aria-hidden />
            <div className="relative aspect-square overflow-hidden rounded-full">
              <Image src="/images/dr-lund.webp" alt="Dr. Trace M. Lund" fill sizes="437px" className="object-cover object-top" />
            </div>
          </div>
          <div>
            <p className="script-eyebrow">Our Doctor</p>
            <h2 className="mt-2 text-[34px] font-bold lg:text-[42px]">Trace M. Lund, DDS</h2>
            <Squiggle className="mt-6" />
            <p className="body-copy mt-6">
              I was 12 years old when I decided I wanted to be a dentist. I was blessed to have a mother who was a dental
              hygienist that quit her own practice of dentistry to be my mom but never lost her love of the profession. I
              had great friends and examples that encouraged my education and dreams. My college years allowed me to
              pursue my love and amazement of the human body…
            </p>
            <Pill href="/#doctor" className="mt-9 min-w-[280px]">
              Meet Dr. Trace M. Lund
            </Pill>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-10 bg-blush py-24">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_531px] lg:gap-[40px]">
          <div>
            <p className="script-eyebrow">Testimonials</p>
            <h2 className="mt-2 text-[34px] font-bold text-navy lg:text-[44px]">Five-Star Dentistry!</h2>
            <Squiggle className="mt-6" />
            <figure className="mt-10">
              <svg viewBox="0 0 40 30" className="h-[34px] w-[44px] fill-[#f0d6d6]" aria-hidden>
                <path d="M0 30V17Q0 5 12 0l3 4Q8 8 8 15h8v15zm22 0V17q0-12 12-17l3 4q-7 4-7 11h8v15z" />
              </svg>
              <blockquote className="mt-4 text-[17px] leading-7 italic">
                I have taken both of my children to Provo Pediatric’s for 13 years. We have never had a bad experience.
                Dr Markham and Dr Lund are both amazing with children. They do great work and are 100% trustworthy!
                😊😊😊
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between text-[18px] font-medium">
                ━ Jenny F.
                <span className="flex gap-4 text-ink/70" aria-hidden>
                  <ArrowLeft className="h-6 w-6" />
                  <ArrowRight className="h-6 w-6" />
                </span>
              </figcaption>
            </figure>
            <Pill href="/#testimonials" className="mt-10 min-w-[257px]">
              See What Others Say
            </Pill>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="relative col-span-2 aspect-[531/335] overflow-hidden">
              <Image src="/images/testimonial-main.webp" alt="A girl smiling in the dental chair" fill sizes="(min-width: 1024px) 531px, 100vw" className="object-cover" />
              <PlayButton className="bottom-6 left-1/2 -translate-x-1/2" />
            </div>
            {['/images/testimonial-2.webp', '/images/testimonial-3.webp'].map((src, i) => (
              <div key={src} className="relative aspect-[255/162] overflow-hidden">
                <Image src={src} alt={i === 0 ? 'A girl making a heart with her hands' : 'A boy giving a thumbs up'} fill sizes="256px" className="object-cover" />
                <PlayButton className="bottom-4 left-1/2 !h-10 !w-10 -translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="scroll-mt-10 py-24">
        <div className="container-site">
          <div className="text-center">
            <h2 className="heading">Latest News</h2>
            <Squiggle className="mx-auto mt-6" />
            <p className="body-copy mt-6">Tips and updates from our pediatric dental team.</p>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-[35px]">
            {news.map((n, i) => (
              <li key={i}>
                <article>
                  <div className="relative aspect-[338/225] overflow-hidden">
                    <Image src={n.image} alt="" fill sizes="(min-width: 768px) 338px, 100vw" className="object-cover" />
                  </div>
                  <h3 className="mt-6 text-[20px] leading-[30px] font-semibold lg:text-[22px]">{n.title}</h3>
                  <p className="mt-3 border-b-2 border-teal pb-4 text-[15px] leading-[26px] text-muted">{n.excerpt}</p>
                  <p className="mt-3 flex justify-between text-[15px]">
                    <span className="text-[#808080]">April 10, 2022</span>
                    <span className="font-medium text-teal uppercase">Read More ➔</span>
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
