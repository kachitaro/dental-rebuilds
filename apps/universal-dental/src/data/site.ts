export const clinic = {
  name: 'Universal Dental',
  phone: '(877) 237-3636',
  phoneHref: 'tel:+18772373636',
  fax: '(877) 237-3636',
  email: 'zendakidental@gmail.com',
  address: ['9950 Irvine Center Dr', 'Irvine, CA, 92618'],
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=9950+Irvine+Center+Dr+Irvine+CA+92618',
  hours: [
    ['Mon', '8:00 am - 7:00 pm'],
    ['Tue', '8:00 am - 7:00 pm'],
    ['Wed', '8:00 am - 5:00 pm'],
    ['Thu', '8:00 am - 7:00 pm'],
    ['Fri', '8:00 am - 5:00 pm'],
    ['Sat', 'Closed'],
    ['Sun', 'Closed'],
  ],
  footerHours: [
    'Monday: 8am – 7pm',
    'Tuesday: 8am – 5pm',
    'Wednesday: 8am – 5pm',
    'Thursday: 8am – 7pm',
    'Friday: 8am – 5pm',
  ],
};

/** Pages not in the rebuild point at the matching section on the home page. */
export const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/#patient-info', label: 'Patient Info' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#news', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const portfolioUrl = 'https://portfolio.gen-nex.tech/#work';
