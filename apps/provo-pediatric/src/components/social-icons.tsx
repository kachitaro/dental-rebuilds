const icons = [
  { label: 'Facebook', d: 'M13.5 8.5V6.8c0-.8.2-1.3 1.4-1.3h1.6V2.7c-.3 0-1.2-.1-2.3-.1-2.2 0-3.7 1.4-3.7 3.9v2H8v3h2.5V20h3v-8.5h2.5l.4-3h-2.9z' },
  { label: 'Google', d: 'M20.6 10.2H12v3.5h4.9c-.4 2.2-2.3 3.5-4.9 3.5-3 0-5.4-2.4-5.4-5.4S9 6.4 12 6.4c1.3 0 2.5.5 3.4 1.3l2.6-2.6C16.4 3.7 14.3 2.8 12 2.8 6.9 2.8 2.8 6.9 2.8 12s4.1 9.2 9.2 9.2c4.6 0 8.8-3.3 8.8-9.2 0-.6-.1-1.2-.2-1.8z' },
  { label: 'Yelp', d: 'M10.7 3.1c-.5-.6-4.3.5-4.5 1.3-.2.6 3.3 6.4 3.7 6.9.6.8 1.6.4 1.7-.5.1-.8-.4-7.1-.9-7.7zm-1.6 10c.8-.3.7-1.3-.1-1.6-.6-.3-5.1-1.6-5.6-1.4-.6.3-.8 4.1-.2 4.5.4.3 5.2-1.2 5.9-1.5zm1.7 1.3c-.5-.6-1.4-.3-1.5.4-.1.6-1.1 5.1-.8 5.6.4.6 3.9 1.9 4.4 1.4.4-.4-1.6-6.8-2.1-7.4zm2.3-1.6c.3.6 3.6 4.4 4.2 4.4.6 0 2.6-3.1 2.4-3.7-.2-.6-5-2-5.8-2.1-.9 0-1.2.9-.8 1.4zm.4-1.9c.8.1 5.1-1.7 5.4-2.3.3-.6-1.7-3.6-2.4-3.7-.6 0-3.8 4.2-4 4.8-.3.7.2 1.2 1 1.2z' },
  { label: 'Twitter', d: 'M20.5 6.6c-.6.3-1.3.5-2 .6.7-.4 1.3-1.1 1.5-1.9-.7.4-1.4.7-2.2.9a3.5 3.5 0 0 0-6 3.2c-2.9-.1-5.5-1.5-7.2-3.7-.3.5-.5 1.1-.5 1.8 0 1.2.6 2.3 1.6 2.9-.6 0-1.1-.2-1.6-.4 0 1.7 1.2 3.1 2.8 3.4-.5.1-1 .2-1.6.1.4 1.4 1.7 2.4 3.3 2.4A7 7 0 0 1 3.5 17a10 10 0 0 0 5.4 1.6c6.4 0 10-5.3 10-10v-.5c.6-.4 1.2-1 1.6-1.5z' },
];

export function SocialIcons() {
  return (
    <ul className="flex items-center justify-center gap-2" aria-label="Social media (not linked in this demo)">
      {icons.map((icon, i) => (
        <li key={icon.label} className="flex items-center gap-2">
          {i > 0 && (
            <span className="text-[13px] text-teal" aria-hidden>
              ×
            </span>
          )}
          <span role="img" aria-label={icon.label} className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d={icon.d} />
            </svg>
          </span>
        </li>
      ))}
    </ul>
  );
}
