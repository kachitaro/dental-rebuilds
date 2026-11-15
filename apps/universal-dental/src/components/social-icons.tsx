const icons = [
  {
    label: 'Facebook',
    path: 'M14 8.5V6.6c0-.9.2-1.4 1.6-1.4H17V2.2C16.7 2.1 15.8 2 14.7 2 12.4 2 11 3.4 11 5.9v2.6H8.6v3.1H11V22h3V11.6h2.6l.4-3.1H14z',
  },
  {
    label: 'Twitter',
    path: 'M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-.8-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.8-4.1 4.1 0 .3 0 .6.1.9C8.4 8.8 5.4 7.2 3.4 4.7c-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.8 3.4-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.9-1.4 1.1-3.2 1.8-5.1 1.8H2c1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.7-6.2 11.7-11.7v-.5c.8-.5 1.4-1.2 2-2.2z',
  },
  {
    label: 'Google',
    path: 'M21.6 10.2H12v3.9h5.5c-.5 2.5-2.6 3.9-5.5 3.9-3.3 0-6-2.7-6-6s2.7-6 6-6c1.4 0 2.7.5 3.8 1.4l2.9-2.9C16.9 2.9 14.6 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5 0 9.6-3.6 9.6-10 0-.6-.1-1.2-.2-1.8z',
  },
];

export function SocialIcons({ tone = 'blue' }: { tone?: 'blue' | 'muted' }) {
  const color = tone === 'blue' ? 'border-blue text-blue hover:bg-blue hover:text-white' : 'border-[#888] text-[#666] hover:border-blue hover:text-blue';
  return (
    <ul className="flex gap-3">
      {icons.map((icon) => (
        <li key={icon.label}>
          <span
            role="img"
            aria-label={icon.label}
            title={`${icon.label} (not linked in this demo)`}
            className={`flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] transition-colors ${color}`}>
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden>
              <path d={icon.path} />
            </svg>
          </span>
        </li>
      ))}
    </ul>
  );
}
