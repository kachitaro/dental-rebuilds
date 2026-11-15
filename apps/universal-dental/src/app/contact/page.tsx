import type { Metadata } from 'next';
import Image from 'next/image';

import { ContactForm } from '@/components/contact-form';
import { ContactCta, PageHero } from '@/components/sections';
import { clinic } from '@/data/site';

export const metadata: Metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/hero-contact.webp"
        imageAlt="Dr. Muazz talking with a patient"
        title="Contact Us"
        subtitle="If you have any questions about dental problems, don’t hesitate to contact us to get more specific information."
        overlay={0.1}
      />

      <section className="relative pb-20">
        <div className="bg-stars-blue absolute inset-x-0 top-0 h-[500px]" aria-hidden />
        <div className="container-site relative pt-[90px]">
          <h2 className="text-center font-serif text-[36px] text-white lg:text-[48px]">We can’t wait to meet you!</h2>

          <div className="mt-12 grid gap-8 bg-white p-6 shadow-[0_3px_12px_rgba(22,45,82,0.12)] lg:grid-cols-[1fr_522px] lg:p-[35px]">
            <div>
              <h3 className="text-[24px] font-bold text-midnight lg:text-[26px]">{clinic.name}</h3>
              <div className="relative mt-4 aspect-[482/221] overflow-hidden">
                <Image src="/images/team-photo.webp" alt="The Universal Dental team" fill sizes="(min-width: 1024px) 482px, 100vw" className="object-cover" />
              </div>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <dl className="space-y-5 text-[16px]">
                  <div>
                    <dt className="font-medium text-sky">Visit us:</dt>
                    <dd className="mt-1 font-bold tracking-[0.04em] text-ink">
                      {clinic.address[0]}.
                      <br />
                      {clinic.address[1]}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-sky">Call us:</dt>
                    <dd>
                      <a href={clinic.phoneHref} className="text-[18px] font-bold tracking-[0.02em] text-ink">
                        {clinic.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-sky">Email us:</dt>
                    <dd>
                      <a href={`mailto:${clinic.email}`} className="text-[15px] font-medium [overflow-wrap:anywhere] text-ink">
                        {clinic.email}
                      </a>
                    </dd>
                  </div>
                </dl>
                <div>
                  <p className="text-[16px] font-medium text-sky">Hours:</p>
                  <table className="mt-1 text-[15px] leading-6 text-ink uppercase">
                    <tbody>
                      {clinic.hours.map(([day, time]) => (
                        <tr key={day}>
                          <th scope="row" className="pr-4 text-left font-normal">
                            {day}
                          </th>
                          <td className={time === 'Closed' ? 'text-[#aaa]' : ''}>{time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <a href={clinic.directionsUrl} className="relative block min-h-[320px] overflow-hidden" aria-label="Get directions to Universal Dental">
              <Image src="/images/map.webp" alt="" fill sizes="(min-width: 1024px) 522px, 100vw" className="object-cover" />
            </a>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-site">
          <span className="mx-auto block h-px w-[90px] bg-line" aria-hidden />
          <h2 className="heading-serif mt-12 text-center text-[32px] !text-blue lg:text-[38px]">Send us a message</h2>
          <p className="mx-auto mt-4 mb-12 max-w-[530px] text-center text-[16px] leading-7 font-light text-muted">
            If you have any questions about dental problems, don’t hesitate to contact us to get more specific
            information.
          </p>
          <ContactForm />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
