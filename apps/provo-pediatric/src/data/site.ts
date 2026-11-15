export const phone = { label: '801-555-0142', href: 'tel:+18015550142' };

export const locations = [
  {
    name: 'Provo Pediatric Dentistry',
    short: 'Provo Pediatric Dentistry',
    tone: 'text-blue',
    pin: 'fill-blue',
    address: ['745 North 500 West, Ste. 103', 'Provo, UT 84601'],
    phone: '801-555-0142',
    phoneHref: 'tel:+18015550142',
    map: '/images/map-provo.webp',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=745+North+500+West+Ste+103+Provo+UT+84601',
    hours: ['Mon & Tue  //  7:00am - 5:00pm', 'Wed  //  8:00am - 5:00pm', 'Thu  //  7:00am - 5:00pm', 'Fri  //  7:00am - 2:00pm', 'Sat & Sun  //  Closed!'],
  },
  {
    name: 'Price Pediatric Dentistry',
    short: 'Price Pediatric Dental',
    tone: 'text-[#b49854]',
    pin: 'fill-[#b49854]',
    address: ['391 North 400 East', 'Price, UT 84501'],
    phone: '435-555-0178',
    phoneHref: 'tel:+14355550178',
    map: '/images/map-price.webp',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=391+North+400+East+Price+UT+84501',
    hours: ['Mon & Tue  //  8:00am - 5:00pm', 'Wed & Thu  //  Admin hours', 'Fri  //  8:00am - 5:00pm', 'Sat - Sun  //  Closed!'],
  },
];

/** Pages outside the rebuild point at the matching section on the home page. */
export const navLinks = [
  { href: '/#about', label: 'About us' },
  { href: '/#doctor', label: 'Our Team' },
  { href: '/services', label: 'Services' },
  { href: '/#why', label: 'Patient info' },
  { href: '/#locations', label: 'Financial' },
  { href: '/#testimonials', label: 'Reviews' },
  { href: '/#locations', label: 'Payment' },
  { href: '/#locations', label: 'Locations' },
  { href: '/contact', label: 'Contact', highlight: true },
];

export const services = [
  { slug: 'bite-adjustments', title: 'Bite Adjustments', image: '/images/svc-bite.webp', text: 'Our dental team wants to help your child achieve a healthy smile that is free of discomfort or tension due to an improper bite alignment.' },
  { slug: 'dental-bonding', title: 'Dental Bonding', image: '/images/svc-bonding.webp', text: 'If your child has a damaged or misshapen smile, we recommend that they receive a dental bonding to help keep their smile beautiful and in good condition.' },
  { slug: 'dental-crowns', title: 'Dental Crowns', image: '/images/svc-crowns.webp', text: 'Children’s teeth are at great risk for developing cavities. As your child’s teeth play an incredibly important role in their oral health and development, it is vital that they receive proper care.' },
  { slug: 'dental-fillings', title: 'Dental Fillings', image: '/images/svc-fillings.webp', text: 'The dental filling is used to restore the tooth to its original structure and function and return your child’s smile to good health.' },
  { slug: 'dental-sealants', title: 'Dental Sealants', image: '/images/svc-sealants.webp', text: 'Dental sealants are a preventive treatment designed to protect your child’s teeth from cavities and tooth decay. Sealants are made of clear or tooth-colored resin material.' },
  { slug: 'guided-eruption', title: 'Guided Eruption', image: '/images/svc-eruption.webp', text: 'If your child’s primary teeth have started to erupt, our pediatric dentists can help keep your child’s smile in proper condition so that their smile develops properly.' },
  { slug: 'periodontal-care', title: 'Periodontal Care', image: '/images/svc-periodontal.webp', text: 'Periodontics focuses on the prevention, diagnosis and treatment of periodontal disease and other conditions that affect the gums and soft tissues of the mouth.' },
  { slug: 'retainers', title: 'Retainers & Interceptive Orthodontics', image: '/images/svc-retainers.webp', text: 'Our dental team wants to help your child achieve a straighter smile so they can keep their oral health in top condition for a lifetime.' },
  { slug: 'root-canal-therapy', title: 'Root Canal Therapy (for baby teeth)', image: '/images/svc-root-canal.webp', text: 'Commonly called a root canal, root canal treatment is a type of endodontic therapy that is often recommended if the tooth pulp and nerves become infected or damaged.' },
  { slug: 'sports-mouth-guards', title: 'Sports Mouth Guards', image: '/images/svc-mouth-guards.webp', text: 'If your child plays a sport, our pediatric dentists may recommend that they be fitted for a custom athletic mouth guard. Also known as sports guards.' },
  { slug: 'teeth-whitening', title: 'Teeth Whitening', image: '/images/svc-whitening.webp', text: 'If your child is struggling with the appearance of heavily yellowed or stained teeth, our team can provide them pediatric teeth whitening.' },
  { slug: 'tongue-tie', title: 'Tongue-Tie/Lip-Tie Treatment', image: '/images/svc-tongue-tie.webp', text: 'Is your child experiencing tongue-tie or lip-tie? This common condition can affect our little patients as old as a newborn all the way up to our teenagers.' },
  { slug: 'tooth-extractions', title: 'Tooth Extractions', image: '/images/svc-extractions.webp', text: 'Our pediatric dentists and team are as gentle as possible when removing your child’s tooth. We want your child to feel comfortable in our office and make every effort to ensure that their tooth extraction is as painless as possible.' },
  { slug: 'trauma-treatment', title: 'Trauma Treatment', image: '/images/svc-trauma.webp', text: 'If your child is struggling with a recent smile injury or trauma, we encourage you to speak with us right away so we can provide your child with emergency pediatric dentistry.' },
  { slug: 'sedation-dentistry', title: 'Sedation Dentistry', image: '/images/svc-sedation.webp', text: 'We are pleased to offer sedation to our patients who may require complex or lengthy treatments, extremely fearful or anxious patients, and patients who would simply like a more pleasant experience in our office.' },
  { slug: 'special-needs-dentistry', title: 'Special Needs Dentistry', image: '/images/svc-special-needs.webp', text: 'Pediatric special needs dentistry is designed to help children who face physical or mental limitations or other challenges enjoy good overall health.' },
];

export const portfolioUrl = 'https://portfolio.gen-nex.tech/#work';
