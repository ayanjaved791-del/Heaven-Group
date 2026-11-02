import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Home,
  DraftingCompass,
  Handshake,
  CalendarCheck,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
  Check,
  X,
  Youtube,
} from "lucide-react";
import { Reveal } from "./components/reveal";
import { CountUp } from "./components/count-up";
import { cn } from "./lib/utils";
import {
  ABOUT_IMAGE,
  ABOUT_IMAGE_2,
  AMENITIES,
  CTA_IMAGE,
  HEAVEN,
  HERO_IMAGE,
  PILLARS,
  PROCESS,
  PROJECTS,
  STATS,
  TESTIMONIALS,
  type ProjectStatus,
} from "./data/heaven-group";

/* ---------- design tokens (scoped to this page) ---------- */
const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" } as const;
const C = {
  // Brand: clean white canvas with Heaven's signature red
  ivory: "#FFFFFF", // page background
  sand: "#FBF2F2", // alternate section background (soft blush)
  ink: "#171214", // primary text
  black: "#C8141B", // bold brand-red bands (stats, CTA, footer)
  muted: "#6B6264",
  gold: "#D7191F", // primary action (brand red)
  goldDeep: "#A80F15", // deep red accent
  forest: "#A80F15", // deep red section
};

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#why", label: "Why Us" },
  { href: "#amenities", label: "Lifestyle" },
  { href: "#contact", label: "Contact" },
];

function Img({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className={cn("overflow-hidden", className)}
      style={{ background: `linear-gradient(135deg, ${C.sand}, #f3dede)` }}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
      )}
    </div>
  );
}

function Eyebrow({
  children,
  light,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em]"
      style={{ color: light ? "#FFD3D5" : C.gold }}
    >
      <span className="h-px w-8" style={{ background: "currentColor" }} />
      {children}
    </p>
  );
}

function Logo({ light }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className="flex items-center gap-3"
      aria-label="Heaven Builders & Developers home"
    >
      <span
        className="grid h-11 w-11 place-items-center rounded-sm"
        style={{
          background: light ? "#fff" : C.gold,
          color: light ? C.gold : "#fff",
        }}
      >
        <Home className="h-6 w-6" strokeWidth={2.2} />
      </span>
      <span className="leading-none">
        <span
          className="block text-2xl font-black uppercase tracking-[0.06em]"
          style={{ color: light ? "#fff" : C.gold }}
        >
          Heaven
        </span>
        <span
          className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.3em]"
          style={{ color: light ? "#ffffffd9" : C.ink }}
        >
          {HEAVEN.tagline}
        </span>
      </span>
    </a>
  );
}

/* ---------- header ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]" : "py-6",
      )}
      style={{ background: solid ? C.ivory : "transparent" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo light={!solid} />
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[13px] font-medium uppercase tracking-[0.18em] transition-colors hover:opacity-70"
              style={{ color: solid ? C.ink : "#fff" }}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${HEAVEN.phone.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition-colors md:inline-flex"
            style={{ background: C.gold }}
          >
            <Phone className="h-4 w-4" /> Call us
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border lg:hidden"
            style={{
              borderColor: solid ? `${C.ink}33` : "#ffffff55",
              color: solid ? C.ink : "#fff",
            }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="h-[calc(100dvh-68px)] overflow-y-auto px-5 pb-10 pt-6 lg:hidden"
          style={{ background: C.ivory }}
        >
          <nav className="flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b py-5 text-3xl"
                style={{ ...serif, color: C.ink, borderColor: `${C.ink}14` }}
              >
                {n.label}
                <ArrowUpRight className="h-5 w-5" style={{ color: C.gold }} />
              </a>
            ))}
          </nav>
          <a
            href={`tel:${HEAVEN.phone.replace(/\s/g, "")}`}
            className="mt-8 flex items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white"
            style={{ background: C.gold }}
          >
            <Phone className="h-4 w-4" /> {HEAVEN.phone}
          </a>
        </div>
      )}
    </header>
  );
}

/* ---------- hero ---------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
      style={{ background: C.forest }}
    >
      <img
        src={HERO_IMAGE}
        alt="A Heaven Group residence at dusk"
        className="hg-kenburns absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pb-24">
        <Reveal>
          <Eyebrow light>Building Today, A Better Tomorrow™</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h1
            className="max-w-4xl text-[44px] leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[92px]"
            style={serif}
          >
            Homes built a little{" "}
            <em className="italic" style={{ color: "#FFD3D5" }}>
              closer to heaven.
            </em>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Premium apartments, villas and commercial spaces — crafted with
            honest materials, clear titles and the promise of on-time
            possession.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
              style={{ background: C.gold }}
            >
              Explore projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
            >
              Book a site visit
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- stats ---------- */
function Stats() {
  return (
    <section style={{ background: C.black }}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:grid-cols-4 md:px-8">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={cn(
              "border-white/10 py-10 text-center md:py-14",
              i % 2 === 0 && "border-r",
              i < 2 && "border-b md:border-b-0",
              i === 1 && "md:border-r",
            )}
          >
            <CountUp
              value={s.value}
              className="block text-5xl text-white md:text-6xl"
            />
            <p
              className="mt-2 text-[11px] uppercase tracking-[0.28em]"
              style={{ color: "#FFD3D5" }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- about ---------- */
function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-24 md:py-32"
      style={{ background: C.ivory }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
        <Reveal variant="left" className="relative">
          <Img
            src={ABOUT_IMAGE}
            alt="Heaven Group construction site"
            className="aspect-[4/5] w-full rounded-sm sm:w-[85%]"
          />
          <div
            className="absolute -bottom-10 right-0 hidden w-[48%] border-[10px] sm:block"
            style={{ borderColor: C.ivory }}
          >
            <Img
              src={ABOUT_IMAGE_2}
              alt="A finished Heaven Group interior"
              className="aspect-square w-full"
            />
          </div>
          <div
            className="absolute left-5 top-5 rounded-sm px-5 py-4 text-white"
            style={{ background: C.gold }}
          >
            <p className="text-4xl leading-none" style={serif}>
              18+
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.24em]">
              Years building
            </p>
          </div>
        </Reveal>

        <Reveal variant="right">
          <Eyebrow>About Heaven Group</Eyebrow>
          <h2
            className="text-4xl leading-[1.08] md:text-6xl"
            style={{ ...serif, color: C.ink }}
          >
            Building trust, one landmark at a time.
          </h2>
          <p
            className="mt-7 text-base leading-relaxed md:text-lg"
            style={{ color: C.muted }}
          >
            Heaven Group is a real estate development company dedicated to
            creating homes and workplaces that stand the test of time. From the
            first brick to the final handover, we focus on structural strength,
            smart planning and finishes that feel premium every day.
          </p>
          <p
            className="mt-5 text-base leading-relaxed md:text-lg"
            style={{ color: C.muted }}
          >
            Our projects are chosen for great connectivity, designed for light
            and ventilation, and delivered with complete legal transparency — so
            every family can buy with confidence.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Home,
                t: "Residential",
                d: "Apartments, villas and family homes.",
              },
              {
                icon: Building2,
                t: "Commercial",
                d: "Offices, showrooms and retail spaces.",
              },
              {
                icon: DraftingCompass,
                t: "Design & Construction",
                d: "Planning, architecture and turnkey builds.",
              },
              {
                icon: Handshake,
                t: "Investment Solutions",
                d: "High-growth property investment advice.",
              },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-4">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full"
                  style={{ background: C.sand, color: C.goldDeep }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold" style={{ color: C.ink }}>
                    {t}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: C.muted }}>
                    {d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- projects ---------- */
const FILTERS: Array<"All" | ProjectStatus> = [
  "All",
  "Ongoing",
  "Upcoming",
  "Completed",
];

function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.status === filter);

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-24 md:py-32"
      style={{ background: C.sand }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>Our Projects</Eyebrow>
            <h2
              className="max-w-2xl text-4xl leading-[1.08] md:text-6xl"
              style={{ ...serif, color: C.ink }}
            >
              Addresses worth coming home to.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div
              className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0"
              role="tablist"
              aria-label="Filter projects"
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className="shrink-0 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
                  style={
                    filter === f
                      ? {
                          background: C.gold,
                          color: "#fff",
                          borderColor: C.gold,
                        }
                      : { color: C.ink, borderColor: `${C.ink}30` }
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 90}>
              <a href="#contact" className="group block">
                <div className="relative">
                  <Img
                    src={p.image}
                    alt={`${p.name} — ${p.type}`}
                    className="aspect-[4/5] w-full rounded-sm"
                  />
                  <span
                    className="absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{
                      background:
                        p.status === "Completed"
                          ? C.ink
                          : p.status === "Ongoing"
                            ? C.gold
                            : "#fff",
                      color: p.status === "Upcoming" ? "#111" : "#fff",
                    }}
                  >
                    {p.status}
                  </span>
                  <span className="absolute bottom-4 right-4 grid h-12 w-12 translate-y-2 place-items-center rounded-full bg-[#D7191F] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight
                      className="h-5 w-5"
                      style={{ color: C.ink }}
                    />
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p
                      className="text-[11px] uppercase tracking-[0.24em]"
                      style={{ color: C.goldDeep }}
                    >
                      {p.type}
                    </p>
                    <h3
                      className="mt-1 text-3xl"
                      style={{ ...serif, color: C.ink }}
                    >
                      {p.name}
                    </h3>
                  </div>
                  <p
                    className="mt-1 flex shrink-0 items-center gap-1 text-sm"
                    style={{ color: C.muted }}
                  >
                    <MapPin className="h-4 w-4" /> {p.location}
                  </p>
                </div>
                <div
                  className="mt-4 flex flex-wrap gap-x-6 gap-y-1 border-t pt-4 text-sm"
                  style={{ borderColor: `${C.ink}1a`, color: C.muted }}
                >
                  <span>{p.config}</span>
                  <span>{p.area}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- why us ---------- */
function WhyUs() {
  return (
    <section
      id="why"
      className="scroll-mt-20 py-24 text-white md:py-32"
      style={{ background: C.forest }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <Eyebrow light>Why Heaven Group</Eyebrow>
            <h2 className="text-4xl leading-[1.08] md:text-6xl" style={serif}>
              The promise behind every wall we build.
            </h2>
            <p className="mt-6 max-w-md text-white/70">
              Buying a home is one of life's biggest decisions. We make it
              simple, safe and rewarding.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="p-8 md:p-10"
                style={{ background: C.forest }}
              >
                <Reveal delay={i * 80}>
                  <p
                    className="text-5xl"
                    style={{ ...serif, color: "#FFD3D5" }}
                  >
                    0{i + 1}
                  </p>
                  <h3 className="mt-5 text-2xl" style={serif}>
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {p.body}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- amenities + process ---------- */
function Amenities() {
  return (
    <section
      id="amenities"
      className="scroll-mt-20 py-24 md:py-32"
      style={{ background: C.ivory }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Lifestyle</Eyebrow>
          </div>
          <h2
            className="text-4xl leading-[1.08] md:text-6xl"
            style={{ ...serif, color: C.ink }}
          >
            Amenities that make every day feel like a retreat.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {AMENITIES.map((a, i) => (
            <Reveal key={a} delay={(i % 4) * 60}>
              <div
                className="flex h-full items-center gap-3 rounded-sm border p-5"
                style={{ borderColor: `${C.ink}18` }}
              >
                <Sparkles
                  className="h-4 w-4 shrink-0"
                  style={{ color: C.gold }}
                />
                <span
                  className="text-sm font-medium md:text-base"
                  style={{ color: C.ink }}
                >
                  {a}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-28">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h3
              className="text-3xl md:text-5xl"
              style={{ ...serif, color: C.ink }}
            >
              Your journey home, in four steps.
            </h3>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s, i) => (
              <Reveal key={s.step} delay={i * 80}>
                <div
                  className="border-t-2 pt-6"
                  style={{ borderColor: C.gold }}
                >
                  <p
                    className="text-sm font-semibold tracking-[0.2em]"
                    style={{ color: C.goldDeep }}
                  >
                    {s.step}
                  </p>
                  <h4
                    className="mt-3 text-2xl"
                    style={{ ...serif, color: C.ink }}
                  >
                    {s.title}
                  </h4>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: C.muted }}
                  >
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- testimonials ---------- */
function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setI((v) => (v + 1) % TESTIMONIALS.length),
      6500,
    );
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i]!;

  return (
    <section className="py-24 md:py-32" style={{ background: C.sand }}>
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Quote className="mx-auto h-10 w-10" style={{ color: C.gold }} />
        <blockquote
          key={i}
          className="hg-fade mt-8 text-2xl leading-snug md:text-4xl"
          style={{ ...serif, color: C.ink }}
        >
          “{t.quote}”
        </blockquote>
        <p
          className="mt-8 text-sm font-semibold uppercase tracking-[0.2em]"
          style={{ color: C.ink }}
        >
          {t.name}
        </p>
        <p className="mt-1 text-sm" style={{ color: C.muted }}>
          {t.project}
        </p>
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Show testimonial ${k + 1}`}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: k === i ? 32 : 10,
                background: k === i ? C.gold : `${C.ink}30`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA banner ---------- */
function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-36"
      style={{ background: C.black }}
    >
      <img
        src={CTA_IMAGE}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#7a0a0f]/90 to-black/30" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <h2
            className="max-w-3xl text-4xl leading-[1.05] text-white md:text-6xl"
            style={serif}
          >
            See your future home in person.{" "}
            <em style={{ color: "#FFD3D5" }}>Book a free site visit.</em>
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em]"
              style={{ background: "#fff", color: C.gold }}
            >
              <CalendarCheck className="h-4 w-4" /> Schedule visit
            </a>
            <a
              href={`https://wa.me/${HEAVEN.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Email: ${f.get("email") || "-"}`,
      `Interested in: ${f.get("interest")}`,
      `Message: ${f.get("message") || "-"}`,
    ];
    // No backend yet: hand the enquiry to WhatsApp so it reaches the sales team instantly.
    const text = encodeURIComponent(
      `New enquiry from website\n\n${lines.join("\n")}`,
    );
    window.open(
      `https://wa.me/${HEAVEN.whatsapp}?text=${text}`,
      "_blank",
      "noopener",
    );
    setSent(true);
    e.currentTarget.reset();
  }

  const input =
    "w-full border-0 border-b bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-[#9a9284] focus:ring-0";
  const inputStyle = { borderColor: `${C.ink}30`, color: C.ink };

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-24 md:py-32"
      style={{ background: C.ivory }}
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Get in touch</Eyebrow>
          <h2
            className="text-4xl leading-[1.08] md:text-6xl"
            style={{ ...serif, color: C.ink }}
          >
            Let's find your place in heaven.
          </h2>
          <p className="mt-6 max-w-md" style={{ color: C.muted }}>
            Share a few details and our relationship manager will call you back
            with floor plans, pricing and site-visit slots.
          </p>

          <ul className="mt-10 space-y-6">
            {[
              {
                icon: Phone,
                label: "Call",
                value: HEAVEN.phone,
                href: `tel:${HEAVEN.phone.replace(/\s/g, "")}`,
              },
              {
                icon: Mail,
                label: "Email",
                value: HEAVEN.email,
                href: `mailto:${HEAVEN.email}`,
              },
              {
                icon: MapPin,
                label: "Visit",
                value: HEAVEN.address,
                href: HEAVEN.mapsUrl,
              },
              { icon: Clock, label: "Hours", value: HEAVEN.hours },
            ].map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full"
                  style={{ background: C.sand, color: C.goldDeep }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.24em]"
                    style={{ color: C.muted }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="mt-1 block font-medium hover:underline"
                      style={{ color: C.ink }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 font-medium" style={{ color: C.ink }}>
                      {value}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-sm border border-black/5 bg-white p-7 shadow-[0_30px_80px_-40px_rgba(22,20,15,0.35)] md:p-10">
            {sent ? (
              <div className="py-16 text-center">
                <span
                  className="mx-auto grid h-16 w-16 place-items-center rounded-full"
                  style={{ background: C.sand, color: C.goldDeep }}
                >
                  <Check className="h-7 w-7" />
                </span>
                <h3
                  className="mt-6 text-3xl"
                  style={{ ...serif, color: C.ink }}
                >
                  Thank you!
                </h3>
                <p className="mt-3" style={{ color: C.muted }}>
                  Your enquiry is ready in WhatsApp — hit send and we'll be in
                  touch shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] underline"
                  style={{ color: C.goldDeep }}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <h3 className="text-3xl" style={{ ...serif, color: C.ink }}>
                  Enquire now
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  <input
                    name="name"
                    required
                    placeholder="Full name *"
                    autoComplete="name"
                    className={input}
                    style={inputStyle}
                  />
                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="Phone *"
                    autoComplete="tel"
                    className={input}
                    style={inputStyle}
                  />
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className={input}
                  style={inputStyle}
                />
                <select
                  name="interest"
                  className={input}
                  style={inputStyle}
                  defaultValue=""
                >
                  <option value="" disabled>
                    I'm interested in…
                  </option>
                  {PROJECTS.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name} — {p.type}
                    </option>
                  ))}
                  <option value="General enquiry">General enquiry</option>
                </select>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Message (optional)"
                  className={cn(input, "resize-none")}
                  style={inputStyle}
                />
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-full py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors"
                  style={{ background: C.black }}
                >
                  Request a call back
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-center text-xs" style={{ color: C.muted }}>
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-20 max-w-7xl px-5 md:px-8">
        <div
          className="relative overflow-hidden rounded-sm border"
          style={{ borderColor: `${C.ink}18` }}
        >
          <iframe
            title="Heaven Group location map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(HEAVEN.mapsEmbedQuery)}&z=15&output=embed`}
            className="h-[340px] w-full md:h-[440px]"
            style={{ border: 0, filter: "grayscale(0.35) sepia(0.15)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={HEAVEN.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg"
            style={{ background: C.gold }}
          >
            <MapPin className="h-4 w-4" /> Get directions
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- footer ---------- */
function Footer() {
  const socials = [
    { icon: Instagram, href: HEAVEN.socials.instagram, label: "Instagram" },
    { icon: Facebook, href: HEAVEN.socials.facebook, label: "Facebook" },
    { icon: Linkedin, href: HEAVEN.socials.linkedin, label: "LinkedIn" },
    { icon: Youtube, href: HEAVEN.socials.youtube, label: "YouTube" },
  ];
  return (
    <footer
      className="pb-28 pt-20 text-white md:pb-10"
      style={{ background: C.black }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Crafting premium residences and commercial landmarks with quality,
              transparency and timely delivery.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-colors hover:border-white hover:bg-white hover:text-[#C8141B]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.28em]"
              style={{ color: "#FFD3D5" }}
            >
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.28em]"
              style={{ color: "#FFD3D5" }}
            >
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${HEAVEN.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {HEAVEN.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${HEAVEN.email}`} className="hover:text-white">
                  {HEAVEN.email}
                </a>
              </li>
              <li>
                <a
                  href={HEAVEN.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Find us on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Heaven Group. All rights reserved.</p>
          <p>
            Images are for representation only. Specifications subject to
            change.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- floating mobile actions ---------- */
function MobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t md:hidden"
      style={{ background: `${C.ink}22`, borderColor: `${C.ink}22` }}
    >
      <a
        href={`tel:${HEAVEN.phone.replace(/\s/g, "")}`}
        className="flex items-center justify-center gap-2 py-4 text-xs font-semibold uppercase tracking-[0.16em]"
        style={{ background: C.ivory, color: C.ink }}
      >
        <Phone className="h-4 w-4" /> Call
      </a>
      <a
        href={`https://wa.me/${HEAVEN.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white"
        style={{ background: C.gold }}
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen antialiased"
      style={{
        background: C.ivory,
        color: C.ink,
        fontFamily: "'Geist', system-ui, sans-serif",
      }}
    >
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes hg-kenburns { from { transform: scale(1.12); } to { transform: scale(1); } }
        .hg-kenburns { animation: hg-kenburns 9s cubic-bezier(.2,.6,.2,1) both; }
        @keyframes hg-fade { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        .hg-fade { animation: hg-fade .7s ease both; }
        @media (prefers-reduced-motion: reduce) { .hg-kenburns, .hg-fade { animation: none; } html { scroll-behavior: auto; } }
      `}</style>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <WhyUs />
        <Amenities />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
