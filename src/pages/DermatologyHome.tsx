import { Link } from "react-router-dom";
import { HeroSection } from "@/components/home/HeroSection";

import { services } from "@/data/services";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Users,
  CalendarCheck,
  FlaskConical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LazyVideo } from "@/components/ui/lazy-video";
import { TreatmentsCarousel } from "@/components/home/TreatmentsCarousel";
import { TeamSection } from "@/components/home/TeamSection";
import { AmbassadorSection } from "@/components/home/AmbassadorSection";
import { CLINIC_OVERVIEW } from "@/data/clinic";

const clinicInterior = new URL("../assets/Images/photo_8_2026-03-25_21-38-08.jpg", import.meta.url).href;
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
    text: "Dermoscopy and AI-supported skin analysis guide every consultation — we investigate causes before recommending treatment.",
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

export const DermatologyHome = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/20 selection:text-slate-900">
      <Header />
      <HeroSection />

      {/* ── 01.5: Our Brand Ambassador ─────────────────────────────────── */}
      <AmbassadorSection />

      {/* ── 02: Editorial DNA ───────────────────────────────────────────── */}
      <section className="py-40 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

            {/* Text */}
            <div className="lg:col-span-5 lg:col-start-2 animate-fade-up">
              <div className="flex items-center gap-2.5 mb-10">
                <Stethoscope className="w-3.5 h-3.5 text-accent shrink-0" />
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
                {CLINIC_OVERVIEW}
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
                <LazyVideo
                  src={prpVideo}
                  autoplayWhenVisible
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-accent text-white px-6 py-4 shadow-2xl border border-white/20">
                <p className="text-[9px] font-black tracking-[0.3em] text-white/80 uppercase mb-1">Live Procedure</p>
                <p className="text-sm font-heading font-light text-white italic">PRP Therapy</p>
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* ── 03: Services Carousel ────────────────────────────────────────── */}
      <section className="py-28 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <TreatmentsCarousel services={services} />
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

      {/* ── 05: Medical Specialists (Staff section hidden per request) ── */}
      {/* <TeamSection /> */}

      {/* ── 06: Why Bosphorus / The Standard ─────────────────────────────── */}
      <section className="py-32 md:py-40 bg-background border-y border-border relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20 animate-fade-up">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase">
                    The Bosphorus Standard
                  </span>
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.02]">
                  Built on clinical rigor. <br />
                  <span className="italic font-light text-muted-foreground">Proven by science.</span>
                </h2>
              </div>
              <p className="text-muted-foreground font-light text-sm md:text-base max-w-md leading-relaxed">
                Every consultation and protocol at Bosphorus is engineered around cellular health, certified safety, and visibly transformative clinical outcomes.
              </p>
            </div>

            {/* Editorial Showcase Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              {/* Left Column (5 cols): Cinematic Clinical Feature Card */}
              <div className="lg:col-span-5 relative flex flex-col justify-between border border-border bg-card overflow-hidden group shadow-sm animate-fade-up">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[360px] overflow-hidden bg-muted">
                  <img
                    src={clinicInterior}
                    alt="Bosphorus Clinical Treatment Facility"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,17%,8%)]/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 text-[8px] font-black tracking-widest text-foreground uppercase border border-border">
                    Hidmona Tower • 2nd Floor
                  </div>
                </div>

                {/* Bottom credentials */}
                <div className="p-8 bg-card flex flex-col justify-between flex-1 border-t border-border">
                  <div>
                    <h3 className="font-heading text-2xl font-light text-foreground mb-3 tracking-tight">
                      Where medicine meets aesthetic precision.
                    </h3>
                    <p className="text-muted-foreground text-xs font-light leading-relaxed mb-6">
                      Operating in private suites at Hidmona Tower, Bole, equipped with certified Class IV lasers, multispectral dermoscopy, and strict hospital-grade sterilization protocols.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/60">
                    <div>
                      <p className="font-heading text-2xl font-light text-accent">100%</p>
                      <p className="text-[9px] font-black tracking-wider text-muted-foreground uppercase">FDA-Cleared Devices</p>
                    </div>
                    <div>
                      <p className="font-heading text-2xl font-light text-accent">MD Specialists</p>
                      <p className="text-[9px] font-black tracking-wider text-muted-foreground uppercase">Board Certified Team</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (7 cols): The 6 Pillars as elegant numbered cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  const num = String(index + 1).padStart(2, "0");
                  return (
                    <div
                      key={pillar.title}
                      className="group border border-border bg-card p-6 md:p-7 flex flex-col justify-between hover:border-accent/50 hover:bg-muted/30 transition-all duration-300 shadow-sm animate-fade-up"
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-mono font-bold text-accent tracking-widest">
                            {num}
                          </span>
                          <div className="w-8 h-8 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                            <Icon className="w-3.5 h-3.5 text-accent" />
                          </div>
                        </div>

                        <h4 className="font-heading text-lg font-medium text-foreground tracking-tight mb-2 group-hover:text-accent transition-colors">
                          {pillar.title}
                        </h4>

                        <p className="text-muted-foreground font-light text-xs leading-relaxed">
                          {pillar.text}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-border/40 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        <span className="text-[8px] font-black tracking-widest text-accent uppercase">Clinical Standard</span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 06: Final CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-accent text-white py-32">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(0,0%,100%) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left — headline */}
            <div className="lg:col-span-7 animate-fade-up">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-white/60" />
                <span className="text-[9px] font-black tracking-[0.5em] text-white/90 uppercase">
                  Private Consultation
                </span>
              </div>

              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter text-white leading-[0.92] mb-6">
                Ready to begin<br />
                <span className="italic text-white/60 font-light">your</span>{" "}
                <span className="font-medium">restoration?</span>
              </h2>

              <p className="text-white/80 font-light text-base sm:text-lg leading-relaxed max-w-lg">
                Reserve a private clinical consultation with a board-certified specialist. We assess, we plan, we deliver — with no waiting lists and no compromises.
              </p>
            </div>

            {/* Right — action card */}
            <div className="lg:col-span-4 lg:col-start-9 animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="border border-white/20 bg-white/10 backdrop-blur-md p-8 sm:p-10 flex flex-col gap-8 shadow-xl">

                {/* Trust signals */}
                <div className="flex flex-col gap-4">
                  {[
                    "Board-certified specialists",
                    "Same-week appointments",
                    "Confidential & private",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white shrink-0" />
                      <span className="text-white text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="h-px bg-white/20" />

                {/* CTAs */}
                <div className="flex flex-col gap-3">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="w-full rounded-none h-14 bg-white hover:bg-white/95 text-accent text-[11px] font-black tracking-[0.25em] transition-all hover:scale-[1.02] active:scale-[0.98] group border-0 shadow-lg"
                    >
                      BOOK CONSULTATION
                      <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button
                      size="lg"
                      variant="ghost"
                      className="w-full rounded-none h-12 text-[10px] font-black tracking-[0.2em] text-white hover:text-white hover:bg-white/15 uppercase transition-all border border-white/30 hover:border-white/50"
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

export default DermatologyHome;
