/**
 * Heaven Group — real estate developer site content.
 *
 * Everything the /heaven-group page shows lives here so it can be edited in one place.
 * Fields marked PLACEHOLDER are sample copy: replace them with the company's real
 * details (phone, email, address, project names, figures) before going live.
 */

export const HEAVEN = {
  name: "Heaven Group",
  tagline: "Builders & Developers",
  slogan: "Building Today, A Better Tomorrow™",
  // Google Maps pin supplied for the company office.
  mapsUrl: "https://maps.app.goo.gl/VWfjqqTz4VQSTJrR6",
  // Embed query used for the map preview; swap for exact coordinates ("lat,lng") once known.
  mapsEmbedQuery: "Heaven Group Builders and Developers",
  phone: "+91 00000 00000", // PLACEHOLDER
  whatsapp: "910000000000", // PLACEHOLDER — digits only, with country code
  email: "info@heavengroup.in", // PLACEHOLDER
  address: "Heaven Group Corporate Office — see map for directions", // PLACEHOLDER
  hours: "Mon – Sat · 10:00 AM – 7:00 PM",
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    youtube: "#",
  },
} as const;

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO_IMAGE = img("photo-1600596542815-ffad4c1539a9", 2400);
export const ABOUT_IMAGE = img("photo-1503387762-592deb58ef4e", 1400);
export const ABOUT_IMAGE_2 = img("photo-1600607687939-ce8a6c25118c", 900);
export const CTA_IMAGE = img("photo-1512917774080-9991f1c4c750", 2000);

export const STATS = [
  { value: "18+", label: "Years of trust" }, // PLACEHOLDER figures
  { value: "42", label: "Projects delivered" },
  { value: "3.6M", label: "Sq. ft. developed" },
  { value: "5,000+", label: "Happy families" },
];

export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";

export type Project = {
  name: string;
  type: string;
  location: string;
  status: ProjectStatus;
  config: string;
  area: string;
  image: string;
};

// PLACEHOLDER portfolio — replace with Heaven Group's actual projects.
export const PROJECTS: Project[] = [
  {
    name: "Heaven Residency",
    type: "Luxury Apartments",
    location: "City Centre",
    status: "Ongoing",
    config: "2, 3 & 4 BHK",
    area: "1,150 – 2,600 sq.ft.",
    image: img("photo-1545324418-cc1a3fa10c00", 1200),
  },
  {
    name: "Heaven Greens",
    type: "Gated Villas",
    location: "Lakeside",
    status: "Ongoing",
    config: "4 & 5 BHK Villas",
    area: "3,200 – 4,800 sq.ft.",
    image: img("photo-1613490493576-7fde63acd811", 1200),
  },
  {
    name: "Heaven Business Bay",
    type: "Commercial Offices",
    location: "Business District",
    status: "Upcoming",
    config: "Office suites & retail",
    area: "600 – 12,000 sq.ft.",
    image: img("photo-1486406146926-c627a92ad1ab", 1200),
  },
  {
    name: "Heaven Elite",
    type: "Premium Residences",
    location: "Hill View Road",
    status: "Completed",
    config: "3 & 4 BHK",
    area: "1,800 – 3,100 sq.ft.",
    image: img("photo-1600585154340-be6161a56a0c", 1200),
  },
  {
    name: "Heaven Courtyard",
    type: "Family Homes",
    location: "Garden Avenue",
    status: "Completed",
    config: "2 & 3 BHK",
    area: "980 – 1,650 sq.ft.",
    image: img("photo-1564013799919-ab600027ffc6", 1200),
  },
  {
    name: "Heaven Skyline",
    type: "High-rise Towers",
    location: "Ring Road",
    status: "Upcoming",
    config: "3 & 4 BHK + Penthouses",
    area: "1,600 – 5,200 sq.ft.",
    image: img("photo-1582407947304-fd86f028f716", 1200),
  },
];

export const PILLARS = [
  {
    title: "Uncompromising quality",
    body: "Branded materials, tested structural design and third-party quality audits at every stage of construction.",
  },
  {
    title: "On-time possession",
    body: "Realistic schedules and disciplined site management mean we hand over the keys when we say we will.",
  },
  {
    title: "Clear titles & approvals",
    body: "Every project is fully approved and legally vetted, so your investment stays safe and transparent.",
  },
  {
    title: "Thoughtful design",
    body: "Vastu-friendly layouts, cross ventilation, natural light and green open spaces designed around real families.",
  },
];

export const AMENITIES = [
  "Clubhouse & gym",
  "Swimming pool",
  "Landscaped gardens",
  "Kids' play area",
  "24×7 security & CCTV",
  "Power backup",
  "Covered parking",
  "Jogging track",
];

export const PROCESS = [
  {
    step: "01",
    title: "Visit & explore",
    body: "Tour our sample flats and sites with a relationship manager.",
  },
  {
    step: "02",
    title: "Choose your home",
    body: "Pick the plan, floor and view that suits your family and budget.",
  },
  {
    step: "03",
    title: "Easy financing",
    body: "Get help with home loans through our partner banks.",
  },
  {
    step: "04",
    title: "Move in",
    body: "Receive your keys on time, with after-sales support that continues.",
  },
];

// PLACEHOLDER testimonials — replace with real customer reviews.
export const TESTIMONIALS = [
  {
    quote:
      "From the first site visit to the day we got our keys, the Heaven Group team was transparent and on time. The build quality speaks for itself.",
    name: "Homeowner",
    project: "Heaven Elite",
  },
  {
    quote:
      "We compared many builders. Heaven Group stood out for clear paperwork, honest pricing and a layout that actually works for our family.",
    name: "Homeowner",
    project: "Heaven Courtyard",
  },
  {
    quote:
      "Our office in their commercial project gave us a premium address at a fair price. Maintenance has been excellent since possession.",
    name: "Business owner",
    project: "Heaven Business Bay",
  },
];
