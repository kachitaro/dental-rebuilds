import { Pill } from '@/components/ui';

export default function NotFound() {
  return (
    <section className="bg-pink px-5 py-28 text-center">
      <p className="font-script text-[64px] leading-none text-teal">Oops!</p>
      <h1 className="heading mt-4">This page isn’t part of the rebuild</h1>
      <p className="body-copy mx-auto mt-4 max-w-[560px]">
        The rebuild covers the home page, services, dental crowns and contact pages.
      </p>
      <Pill href="/" className="mt-8 min-w-[220px]">
        Back to home
      </Pill>
    </section>
  );
}
