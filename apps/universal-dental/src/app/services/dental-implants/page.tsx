import type { Metadata } from 'next';
import Image from 'next/image';

import { ContactCta, PageHero } from '@/components/sections';

export const metadata: Metadata = { title: 'Dental Implants' };

const advantages = [
  'Dental implants replace the lost tooth’s root structure, thus becoming a fixed part of your body.',
  'They look and feel just like natural teeth.',
  'Since they’re fixed and rooted in place, they don’t move around or slide in your mouth.',
  'You don’t have to worry about them while eating or speaking.',
  'After a while, you don’t even feel the dental implants.',
  'Dental implants last a lifespan.',
  'You don’t have to do anything extra to maintain them — regular oral hygiene is enough.',
  'Dental implants improve your confidence and self-esteem because they look great, and there’s no risk of them coming off or being visible.',
  'People won’t even know you have dental implants.',
];

const treatments = [
  {
    title: 'Single tooth replacement',
    image: '/images/implant-single.webp',
    alt: 'Illustration of a single implant with crown placed between two natural teeth',
    body: [
      'A single tooth implant is a single implant used to replace one missing tooth. The dental implant dentist affixes a titanium post into the jawbone of the missing tooth as a replacement for the lost tooth’s root. Following that, a dental crown is secured over the titanium post.',
    ],
  },
  {
    title: 'Multiple teeth replacement',
    image: '/images/implant-multiple.webp',
    alt: 'Illustration of an implant bridge on the lower jaw',
    body: [
      'Replacing multiple teeth can be achieved with numerous single-tooth implant restorations, with implant fixed partial dentures (implant bridges), with a removable partial denture (RPD), or with a conventional fixed partial denture (FPD). The missing teeth may be substituted with multiple single-tooth implant restorations or fixed partial dentures (implant bridges). The space, gum tissue, and underlying bone must be appropriate to place the dental implants. Implant bridges replace the support lost due to missing teeth, avoid drilling the adjacent teeth, and do not need an implant for every missing tooth.',
    ],
  },
  {
    title: 'All-on-Four dental implants',
    image: '/images/implant-all-on-four.webp',
    alt: 'Model of a full arch held by four implants',
    body: [
      'If you’re missing most or all of your natural teeth, you may have considered complete teeth replacements such as dentures. All-on-four dental implants use just a few—typically between four and six—to create your new smile. These implants are strategically placed to support your new sets of teeth, which will be permanently fixed to the dental implants to provide you with a strong, confident, and natural-looking smile. You can replace both your upper and lower rows of teeth with all-on-four dental implants. All-on-four dental implants have an excellent success rate of 99.8%, meaning the chances that you would experience complications or that your body would reject the implants are very low.',
      'Unlike dentures, all-on-four dental implants are comfortable and secure. They don’t require adhesives and don’t rely on gum suction to stay in place. You can safely enjoy all the foods you love and smile and laugh without worrying about your dentures coming out of place.',
    ],
  },
];

const involve = [
  'The first step in the dental implant is developing an individualized restorative plan. The plan is designed to your specific needs and is prepared by a team of trained and experienced professionals in oral surgery and restorative dentistry. This team approach provides quality care based on your best implant option.',
  'Next, the tooth root implant, a small post made of titanium, is placed into the missing tooth’s bone socket. As the jawbone heals, it grows around the implanted metal post until it anchors securely in the jaw. The healing process can take from six to 12 weeks.',
  'Once the implant has bonded to the jawbone, an abutment is attached to the post to hold the new tooth securely. A replacement tooth called a crown would be attached to the abutment. To fabricate the new tooth or teeth, your dentist makes impressions of your teeth which creates a model of your bite (which captures all of your teeth, their type, and arrangement).',
  'Instead of one or more individual crowns, some patients may have attachments placed on the implant that retain and support a removable denture.',
  'Your dentist will also match the new teeth’ color to your natural teeth. Because the implant is secured within the jawbone, the replacement teeth look, feel, and function like your natural teeth.',
];

const whyUs = [
  'At Universal Dental, we carefully examine your teeth and consider your expectations to curate the ideal restorative dentistry treatment plan. Our highly qualified, experienced dentists are more than well-equipped to make your dental implant treatment comfortable, stress-free and effective.',
  'Moreover, our clinic is extremely well-known throughout the community for dental implants. We only use high-end implant systems from reputable brands worldwide to bring perfect results and a success rate of up to 99%.',
  'If you think you may require a dental implant or want to discuss alternative treatment options to suit your needs, do not hesitate to get in contact.',
];

const prose = 'text-[17px] leading-7 font-light lg:text-[18px]';

export default function DentalImplantsPage() {
  return (
    <>
      <PageHero
        image="/images/svc-implants.webp"
        imageAlt="A dentist and patient smiling in the treatment room"
        eyebrow="Services"
        title="Dental Implants"
        subtitle="Everyone deserves the chance to have a beautiful and healthy smile"
        overlay={0.2}
        align="right"
      />

      <section className="py-20 lg:py-[100px]">
        <div className="mx-auto max-w-[900px] px-5 text-center">
          <h2 className="heading-serif text-[40px] lg:text-[48px]">Dental Implants</h2>
          <p className={`mt-6 ${prose}`}>
            Dental implant surgery is a procedure that replaces tooth roots with metal, screwlike posts and substitutes
            damaged or missing teeth with artificial teeth that look and function much like natural ones. Dental implant
            surgery can offer a welcome alternative to dentures or bridgework that is no adequately fitted well and can
            offer an option when a lack of natural teeth roots don’t allow building dentures or bridgework tooth
            replacements.
          </p>
          <div className="relative mt-12 aspect-[2/1] overflow-hidden">
            <Image src="/images/implant-model.webp" alt="Dental technicians presenting a model of a tooth implant" fill sizes="(min-width: 900px) 900px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-stars-navy py-20 text-white lg:py-[90px]">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[512px_1fr] lg:gap-[60px]">
          <div className="relative aspect-[512/418] overflow-hidden">
            <Image src="/images/implant-smile.webp" alt="A young man smiling to show his dental implant" fill sizes="(min-width: 1024px) 512px, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-[32px] leading-[1.3] uppercase lg:text-[38px]">
              Reasons for
              <br />
              dental implants
            </h2>
            <div className={`mt-6 space-y-3 ${prose}`}>
              <p>
                Missing teeth can shift your bite out of alignment, altering your facial shape. They can make you
                self-conscious about your smile.
              </p>
              <p>
                If you replace missing teeth, your dentist may recommend artificial teeth attached to or near the jawbone
                with a dental implant.
              </p>
              <p>
                ➠ Restoration on the implant will be made according to the shape and size of the lost natural tooth,
                bringing comfort and restoring up to 90% of your ability to eat and chew.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[80px]">
        <div className="mx-auto max-w-[900px] px-5">
          <h2 className="heading-serif text-center text-[32px] !text-blue lg:text-[38px]">Advantages of Dental Implants</h2>
          <ul className={`mt-8 space-y-1 ${prose}`}>
            {advantages.map((a) => (
              <li key={a} className="flex gap-3">
                <span aria-hidden>•</span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f6f6f6] py-20 lg:py-[90px]">
        <div className="container-site">
          <h2 className="heading-serif text-center text-[32px] !text-blue lg:text-[38px]">Types Of Implant Treatments</h2>
          <div className="mt-14 space-y-16 lg:space-y-[70px]">
            {treatments.map((t, i) => (
              <article key={t.title} className="grid items-start gap-8 lg:grid-cols-2 lg:gap-[60px]">
                <div className={`relative aspect-[512/363] overflow-hidden bg-white ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image src={t.image} alt={t.alt} fill sizes="(min-width: 1024px) 512px, 100vw" className="object-contain" />
                </div>
                <div className="lg:pt-6">
                  <h3 className="text-[22px] leading-[35px] font-bold text-ink uppercase lg:text-[28px]">{t.title}</h3>
                  <div className={`mt-3 space-y-3 ${prose}`}>
                    {t.body.map((p) => (
                      <p key={p.slice(0, 20)}>{p}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[90px]">
        <div className="mx-auto max-w-[900px] space-y-20 px-5">
          <div>
            <h2 className="heading-serif text-center text-[32px] !text-blue lg:text-[38px]">What Does Getting Dental Implants Involve?</h2>
            <div className={`mt-8 space-y-3 ${prose}`}>
              {involve.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="bg-[#f6f6f6] px-6 py-12 lg:px-12">
            <h2 className="heading-serif mx-auto max-w-[720px] text-center text-[32px] !text-blue lg:text-[38px]">
              Why choose Universal Dental For Your Dental Implant?
            </h2>
            <div className={`mt-8 space-y-3 ${prose}`}>
              {whyUs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
