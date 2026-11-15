import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { PlayButton } from '@/components/ui';
import { phone, services } from '@/data/site';

export const metadata: Metadata = { title: 'Dental Crowns' };

const benefits = [
  'Durability',
  'Complete protection for the tooth',
  'Little to no tooth sensitivity after treatment',
  'Reduced likelihood that further treatment will be needed',
  'Greater success in restoring a tooth than fillings in young children',
  'Effective space maintenance for the permanent teeth',
];

export default function DentalCrownsPage() {
  const half = Math.ceil(services.length / 2);

  return (
    <>
      <section className="relative flex h-[300px] items-center overflow-hidden lg:h-[400px]">
        <Image src="/images/svc-crowns.webp" alt="A dentist showing a boy his new smile in a mirror" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/10" aria-hidden />
        <div className="relative ml-auto mr-[5%] flex h-[150px] w-[220px] flex-col items-center justify-center rounded-[50%_45%_55%_45%/55%_50%_50%_45%] bg-blue/90 text-center text-white lg:mr-[14%] lg:h-[170px] lg:w-[250px]">
          <h1 className="text-[22px] font-semibold lg:text-[24px]">Dental Crowns</h1>
          <p className="mt-1 font-script text-[20px] leading-tight lg:text-[22px]">
            Have a smile that lasts
            <br />a lifetime
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-[90px]">
        <div className="container-site grid gap-12 lg:grid-cols-[748px_1fr] lg:gap-[80px]">
          <div>
            <h2 className="heading">Dental Crowns</h2>
            <p className="body-copy mt-5">
              We offer pediatric dental crowns in Provo, Utah, so we can preserve your child’s natural teeth and repair
              their smile. If you would like to schedule a visit for your child here at Provo Pediatric Dentistry, we
              welcome you to call us at{' '}
              <a href={phone.href} className="font-semibold text-teal">
                {phone.label}
              </a>{' '}
              today and ask for our pediatric dentists, Dr. Trace M. Lund, Dr. Kevin R. Markham or Dr. Bryce J. Bott.
            </p>
            <div className="relative mt-8 aspect-[748/431] overflow-hidden bg-[#eee]">
              <Image src="/images/crowns-video.webp" alt="Video still titled Pediatric Crowns" fill sizes="(min-width: 1024px) 748px, 100vw" className="object-cover" />
              <PlayButton className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <p className="body-copy mt-8">
              Children’s teeth are at great risk for developing cavities. As your child’s teeth play an incredibly
              important role in their oral health and development, it is vital that they receive proper care. Baby teeth
              that have sustained significant damage are unlikely to be restored using a filling, and our pediatric
              dentists may instead recommend a dental crown. Our office provides tooth-colored dental crowns that can
              restore your child’s teeth while also giving them back a beautiful and natural-looking smile.
            </p>

            <h3 className="mt-12 text-[24px] font-bold text-heading lg:text-[28px]">Dental crowns have many benefits</h3>
            <ul className="mt-3 space-y-1 text-[16px] leading-7">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="text-gold" aria-hidden>
                    ❖
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="body-copy mt-6 space-y-3">
              <p>
                It may take two appointments to complete your child’s treatment and provide them with a crown. During the
                first appointment, we will prepare them to receive the crown, including taking impressions. During the
                second appointment, our pediatric dentists will place the final crown. Throughout your child’s entire
                experience, we will make every effort to ensure that they feel comfortable and at ease.
              </p>
              <p>
                To learn more about tooth-colored pediatric dental crowns and make an appointment with our pediatric
                dentists, contact our office today.
              </p>
            </div>
            <p className="mt-10 rounded-tr-[40px] rounded-bl-[40px] bg-teal px-6 py-6 text-center text-[16px] leading-7 text-white lg:px-10">
              To schedule an appointment for your child here at Provo Pediatric Dentistry, please feel free to contact us
              today at{' '}
              <a href={phone.href} className="font-semibold underline">
                {phone.label}
              </a>{' '}
              and ask for a visit with our pediatric dentists, Dr. Trace M. Lund, Dr. Kevin R. Markham or Dr. Bryce J.
              Bott.
            </p>
          </div>

          <aside className="lg:pt-0">
            <div className="lg:sticky lg:top-8">
              <Image
                src="/images/crowns-sidebar.webp"
                alt="Care for your smile! We look forward to meeting you!"
                width={512}
                height={760}
                className="mx-auto w-full max-w-[256px]"
              />
              <div className="mx-auto max-w-[256px]">
                <Link href="/contact" className="block bg-blue py-5 text-center text-[16px] font-medium tracking-[0.03em] text-white uppercase hover:bg-navy">
                  Request Appointment
                </Link>
                <a href={phone.href} className="mt-5 block bg-gold py-3 text-center text-white hover:bg-[#c2962a]">
                  <span className="block text-[16px]">— Call Us —</span>
                  <span className="block text-[22px] font-semibold tracking-[0.03em]">{phone.label}</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[512px_1fr] lg:gap-[60px]">
          <div className="relative aspect-[512/472] overflow-hidden">
            <Image src="/images/best-dentist.webp" alt="A girl in the dental chair laughing with her dentist" fill sizes="(min-width: 1024px) 512px, 100vw" className="object-cover" />
          </div>
          <div className="relative">
            <Image src="/images/seahorse.png" alt="" width={180} height={251} className="absolute -top-6 right-0 hidden w-[60px] lg:block" />
            <h2 className="font-script text-[42px] lg:text-[48px]">Other Services</h2>
            <span className="mt-2 block h-0.5 w-12 bg-teal" aria-hidden />
            <div className="mt-6 grid gap-x-8 text-[14px] leading-6 tracking-[0.14em] uppercase sm:grid-cols-2 lg:text-[15px]">
              {[services.slice(0, half), services.slice(half)].map((col, i) => (
                <ul key={i}>
                  {col.map((s) => (
                    <li key={s.slug}>
                      <Link href={s.slug === 'dental-crowns' ? '/services/dental-crowns' : `/services#${s.slug}`} className="block py-0.5 hover:text-teal">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
