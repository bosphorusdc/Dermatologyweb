import { Link } from "react-router-dom";
import { HeroSection } from "@/components/home/HeroSection";

import { services, featuredServices } from "@/data/services";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  Plus,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Users,
  CalendarCheck,
  FlaskConical,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const prpVideo = new URL("../assets/prp/IMG_4516.MOV", import.meta.url).href;

const melasmaBeforeImg = new URL("../assets/Melasma before & after/photo_2026-03-25_13-10-10.jpg", import.meta.url).href;
const melasmaAfterImg  = new URL("../assets/Melasma before & after/photo_2026-03-25_13-09-53.jpg", import.meta.url).href;
const bacteriaBeforeImg = new URL("../assets/skinbacteria infection b and f/photo_2026-03-25_13-18-56.jpg", import.meta.url).href;
const bacteriaAfterImg  = new URL("../assets/skinbacteria infection b and f/photo_2026-03-25_13-19-08.jpg", import.meta.url).href;

// ── Data ────────────────────────────────────────────────────────────────────

const pillars = [
  {
    icon: Stethoscope,
    title: "Elite Specialists",
    text: "Internationally board-certified dermatologists operating at the highest standard of medical practice.",
  },
  {
    icon: FlaskConical,
    title: "Protocol-Driven",
    text: "Treatments follow peer-reviewed evidence and documented clinical pathways. No trends—only results.",
  },
  {
    icon: Microscope,
    title: "Diagnostic-First",
    text: "We analyse skin at a molecular level before recommending any procedure. Precision is our baseline.",
  },
  {
    icon: ShieldCheck,
    title: "FDA-Cleared Only",
    text: "We exclusively utilise FDA-cleared technology and pharmaceutical-grade materials.",
  },
  {
    icon: Users,
    title: "Personalised Care",
    text: "Each patient receives a bespoke protocol built around their unique biology and lifestyle.",
  },
  {
    icon: CalendarCheck,
    title: "Continuity",
    text: "Our commitment extends beyond the treatment room. Ongoing monitoring is built into every journey.",
  },
];

// ── Component ────────────────────────────────────────────────────────────────

const Home = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/20 selection:text-slate-900">
      <Header />
      <HeroSection />



      {/* ── 02: Editorial DNA ───────────────────────────────────────────── */}
      <section className="py-40 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

            {/* Text */}
            <div className="lg:col-span-5 lg:col-start-2 animate-fade-up">
              <div className="flex items-center gap-3 mb-10">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">
                  The Standard
                </span>
              </div>

              <h2 className="font-heading text-5xl md:text-7xl font-light tracking-tighter text-foreground leading-[0.95] mb-12">
                Excellence <br />
                <span className="italic font-light text-muted-foreground">in every</span><br />
                <span className="font-medium">procedure.</span>
              </h2>

              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6 max-w-lg">
                Every treatment at Bosphorus is performed with surgical discipline. Our specialists bring years of advanced clinical training to each session — no shortcuts, no compromises.
              </p>

              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-lg">
                From PRP therapy to complex dermatological protocols, the same standard of professionalism applies across every procedure we offer.
              </p>

              <Link to="/about">
                <Button
                  size="lg"
                  variant="ghost"
                  className="px-0 hover:bg-transparent text-[11px] font-black tracking-[0.2em] text-foreground uppercase group"
                >
                  OUR APPROACH
                  <ArrowRight className="ml-3 h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* PRP Video */}
            <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <video
                  src={prpVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-foreground px-6 py-4 shadow-2xl">
                <p className="text-[9px] font-black tracking-[0.3em] text-accent uppercase mb-1">Live Procedure</p>
                <p className="text-sm font-heading font-light text-background italic">PRP Therapy</p>
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* ── 03: Services Marquee ────────────────────────────────────────── */}
      <section className="py-24 bg-background overflow-hidden border-b border-border">
        <div className="container mx-auto px-6 mb-12 animate-fade-up">
          <div className="flex items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Our Treatments</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-light tracking-tighter text-foreground leading-[0.95]">
                Every procedure,<br />
                <span className="italic font-light text-muted-foreground">one standard.</span>
              </h2>
            </div>
            <Link to="/services" className="hidden md:block shrink-0 pb-1">
              <Button variant="ghost" className="px-0 hover:bg-transparent text-[10px] font-black tracking-[0.3em] uppercase text-foreground group">
                All Services
                <ArrowRight className="ml-2 h-3 w-3 text-accent group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Marquee track — duplicated for seamless loop */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex gap-5 animate-marquee" style={{ width: "max-content" }}>
            {[...services, ...services].map((service, i) => {
              const img = service.images?.after
                ?? service.images?.before
                ?? service.images?.gallery?.[0];
              return (
                <Link
                  key={`${service.slug}-${i}`}
                  to={`/services/${service.slug}`}
                  className="group relative shrink-0 w-64 h-80 overflow-hidden border border-border hover:border-accent/50 transition-all duration-500"
                >
                  {/* Image or video thumbnail */}
                  {img ? (
                    <img
                      src={img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  ) : service.images?.videos?.[0] ? (
                    <video
                      src={service.images.videos[0]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      muted
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                      onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50" />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[8px] font-black tracking-[0.3em] text-accent uppercase mb-1.5">
                      Treatment
                    </p>
                    <h3 className="font-heading text-base font-medium text-white leading-tight tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Arrow on hover */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-3.5 w-3.5 text-accent" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 04: Before & After Results ──────────────────────────────────── */}
      <section className="py-40 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="max-w-7xl mx-auto mb-20 animate-fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">
                    Clinical Evidence
                  </span>
                </div>
                <h2 className="font-heading text-5xl md:text-6xl font-light tracking-tighter text-foreground leading-[0.95]">
                  Results that <br />
                  <span className="italic font-light text-muted-foreground">speak for themselves.</span>
                </h2>
              </div>
              <p className="text-muted-foreground font-light max-w-sm leading-relaxed text-sm md:text-base">
                Drag the slider to compare before and after each clinical protocol. Every result is photographed under standardised conditions.
              </p>
            </div>
          </div>

          {/* Two static pairs */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Card 1 — Melasma */}
            <div className="animate-fade-up flex flex-col" style={{ animationDelay: "80ms" }}>
              <div className="grid grid-cols-2 h-[480px]">
                <div className="relative overflow-hidden">
                  <img src={melasmaBeforeImg} alt="Melasma before" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 bg-foreground/80 backdrop-blur-sm px-3 py-1.5 text-[9px] font-black tracking-[0.3em] text-background uppercase">Before</div>
                </div>
                <div className="relative overflow-hidden">
                  <img src={melasmaAfterImg} alt="Melasma after" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 right-4 bg-accent px-3 py-1.5 text-[9px] font-black tracking-[0.3em] text-accent-foreground uppercase">After</div>
                </div>
              </div>
              <div className="border border-t-0 border-border bg-background px-8 py-6 flex items-start justify-between gap-6">
                <div>
                  <p className="text-[9px] font-black tracking-[0.35em] text-accent uppercase mb-2">Protocol Result</p>
                  <h3 className="font-heading text-2xl font-light text-foreground tracking-tight mb-1">Melasma Treatment</h3>
                  <p className="text-muted-foreground text-sm font-light">Significant pigmentation reduction after 3 targeted sessions.</p>
                </div>
                <Link to="/services/melasma" className="shrink-0 mt-1">
                  <Button variant="ghost" size="sm" className="rounded-none px-0 text-[10px] font-black tracking-[0.2em] uppercase text-accent hover:text-accent/80 hover:bg-transparent group">
                    View Protocol
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Card 2 — Skin Bacteria */}
            <div className="animate-fade-up flex flex-col" style={{ animationDelay: "160ms" }}>
              <div className="grid grid-cols-2 h-[480px]">
                <div className="relative overflow-hidden">
                  <img src={bacteriaBeforeImg} alt="Skin bacteria before" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 bg-foreground/80 backdrop-blur-sm px-3 py-1.5 text-[9px] font-black tracking-[0.3em] text-background uppercase">Before</div>
                </div>
                <div className="relative overflow-hidden">
                  <img src={bacteriaAfterImg} alt="Skin bacteria after" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 right-4 bg-accent px-3 py-1.5 text-[9px] font-black tracking-[0.3em] text-accent-foreground uppercase">After</div>
                </div>
              </div>
              <div className="border border-t-0 border-border bg-background px-8 py-6 flex items-start justify-between gap-6">
                <div>
                  <p className="text-[9px] font-black tracking-[0.35em] text-accent uppercase mb-2">Protocol Result</p>
                  <h3 className="font-heading text-2xl font-light text-foreground tracking-tight mb-1">Skin Bacteria Infection</h3>
                  <p className="text-muted-foreground text-sm font-light">Full clinical clearance achieved through targeted antibiotic protocol.</p>
                </div>
                <Link to="/services/skin-bacteria-infection" className="shrink-0 mt-1">
                  <Button variant="ghost" size="sm" className="rounded-none px-0 text-[10px] font-black tracking-[0.2em] uppercase text-accent hover:text-accent/80 hover:bg-transparent group">
                    View Protocol
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>

          {/* Disclaimer */}
          <p className="text-center text-[9px] text-muted-foreground/50 tracking-widest uppercase italic mt-12 max-w-7xl mx-auto">
            * All results photographed under standardised clinical lighting. Individual biological response varies.
          </p>
        </div>
      </section>

      {/* ── 05: Why Bosphorus ───────────────────────────────────────────── */}
      <section className="py-40 bg-background border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 animate-fade-up">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">
                    Why Bosphorus
                  </span>
                </div>
                <h2 className="font-heading text-5xl md:text-6xl font-light tracking-tighter text-foreground leading-[0.95]">
                  Built on a<br />
                  <span className="italic font-light text-muted-foreground">higher standard.</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 flex items-end">
                <p className="text-muted-foreground font-light leading-relaxed">
                  Every decision at Bosphorus — from the technology we use to the specialists we employ — is made with one goal: delivering outcomes that are clinically defensible and visibly transformative.
                </p>
              </div>
            </div>

            {/* Pillars grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="group bg-background p-10 hover:bg-muted/30 transition-colors duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="mb-8 w-10 h-10 flex items-center justify-center border border-border group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                    <pillar.icon className="h-4 w-4 text-foreground/50 group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-xl font-medium mb-3 tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 06: Selective Procedures ──────────────────────────────────────── */}
      <section className="py-40 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 animate-fade-up">
              <div>
                 <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">
                    Our Expertise
                  </span>
                </div>
                <h2 className="font-heading text-5xl md:text-7xl font-light tracking-tighter text-foreground leading-[0.9]">
                  Selective <br /><span className="italic font-light text-muted-foreground">Procedures.</span>
                </h2>
              </div>

              <Link to="/services" className="pb-2">
                <Button
                  variant="ghost"
                  className="text-foreground px-0 hover:bg-transparent text-[10px] font-black tracking-[0.3em] uppercase group"
                >
                  Discover Full Repertoire
                  <ArrowRight className="ml-3 h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service, i) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group block border border-border p-10 hover:border-accent/30 hover:bg-muted/30 transition-all duration-500 animate-fade-up h-full flex flex-col"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="text-[9px] font-black tracking-[0.3em] text-muted-foreground/50 group-hover:text-accent transition-colors block mb-12">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-3xl font-light text-foreground mb-6 tracking-tight group-hover:translate-x-2 transition-transform">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-12 flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <span className="text-[9px] font-black tracking-[0.2em] text-foreground uppercase">View Protocol</span>
                    <Plus className="h-3 w-3 text-accent group-hover:rotate-90 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>





      {/* ── 06: Final CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[hsl(210,17%,11%)] py-40">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(0,0%,100%) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Accent glow */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left — headline */}
            <div className="lg:col-span-7 animate-fade-up">
              <div className="flex items-center gap-3 mb-10">
                <div className="h-px w-8 bg-accent/60" />
                <span className="text-[9px] font-black tracking-[0.5em] text-accent uppercase">
                  Private Consultation
                </span>
              </div>

              <h2 className="font-heading text-5xl md:text-7xl font-light tracking-tighter text-white leading-[0.92] mb-8">
                Ready to begin<br />
                <span className="italic text-white/40 font-light">your</span>{" "}
                <span className="font-medium">restoration?</span>
              </h2>

              <p className="text-white/50 font-light text-lg leading-relaxed max-w-lg">
                Reserve a private clinical consultation with a board-certified specialist. We assess, we plan, we deliver — with no waiting lists and no compromises.
              </p>
            </div>

            {/* Right — action card */}
            <div className="lg:col-span-4 lg:col-start-9 animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="border border-white/10 bg-white/5 backdrop-blur-sm p-10 flex flex-col gap-8">

                {/* Trust signals */}
                <div className="flex flex-col gap-4">
                  {[
                    "Board-certified specialists",
                    "Same-week appointments",
                    "Confidential & private",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-white/60 text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="h-px bg-white/10" />

                {/* CTAs */}
                <div className="flex flex-col gap-3">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="w-full rounded-none h-14 bg-accent hover:bg-accent/90 text-accent-foreground text-[11px] font-black tracking-[0.25em] transition-all hover:scale-[1.02] active:scale-[0.98] group border-0 shadow-none"
                    >
                      BOOK CONSULTATION
                      <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button
                      size="lg"
                      variant="ghost"
                      className="w-full rounded-none h-12 text-[10px] font-black tracking-[0.2em] text-white/50 hover:text-white hover:bg-white/5 uppercase transition-all border border-white/10 hover:border-white/20"
                    >
                      Browse Treatments
                    </Button>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
