import { portfolioUrl } from '@/data/site';

export function DemoBanner() {
  return (
    <div className="bg-midnight px-5 py-2 text-center text-[13px] text-white/85">
      Portfolio rebuild of a 2022 client design from my time at Techbee Solutions. Not the clinic&apos;s live
      site, and forms don&apos;t send anything.{' '}
      <a href={portfolioUrl} className="font-semibold text-white underline underline-offset-2">
        Back to portfolio
      </a>
    </div>
  );
}
