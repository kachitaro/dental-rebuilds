import { Pill } from '@/components/button';

export default function NotFound() {
  return (
    <section className="bg-stars-navy flex min-h-[70vh] items-center px-5 pt-32 pb-20 text-center text-white">
      <div className="mx-auto max-w-[560px]">
        <p className="font-script text-[64px] leading-none">404</p>
        <h1 className="mt-4 font-serif text-[34px]">This page isn’t part of the rebuild</h1>
        <p className="mt-4 text-[17px] font-light">
          The rebuild covers the home page, services, dental implants and contact pages.
        </p>
        <Pill href="/" variant="white" className="mt-8 min-w-[220px]">
          Back to home
        </Pill>
      </div>
    </section>
  );
}
