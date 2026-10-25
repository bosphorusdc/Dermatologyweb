import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Stethoscope, Microscope, HeartPulse, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AmbassadorSection } from "@/components/home/AmbassadorSection";
import { TeamSection } from "@/components/home/TeamSection";
import {
  CLINIC_OVERVIEW,
  CLINIC_VISION,
  CLINIC_MISSION,
  CLINICAL_APPROACH,
  WHY_CHOOSE_US,
} from "@/data/clinic";

// Clinic images
const img1  = new URL("../assets/Images/photo_1_2026-03-25_21-38-08.jpg",  import.meta.url).href;
const img2  = new URL("../assets/Images/photo_2_2026-03-25_21-38-08.jpg",  import.meta.url).href;
const img3  = new URL("../assets/Images/photo_3_2026-03-25_21-38-08.jpg",  import.meta.url).href;
const img4  = new URL("../assets/Images/photo_4_2026-03-25_21-38-08.jpg",  import.meta.url).href;
const img5  = new URL("../assets/Images/photo_5_2026-03-25_21-38-08.jpg",  import.meta.url).href;
const img6  = new URL("../assets/Images/photo_6_2026-03-25_21-38-08.jpg",  import.meta.url).href;
const img7  = new URL("../assets/Images/photo_7_2026-03-25_21-38-08.jpg",  import.meta.url).href;
const img8  = new URL("../assets/Images/photo_8_2026-03-25_21-38-08.jpg",  import.meta.url).href;
const img9  = new URL("../assets/Images/photo_9_2026-03-25_21-38-08.jpg",  import.meta.url).href;
const img10 = new URL("../assets/Images/photo_10_2026-03-25_21-38-08.jpg", import.meta.url).href;

const pillars = [
  {
    icon: Stethoscope,
    title: WHY_CHOOSE_US[0].title,
    text: WHY_CHOOSE_US[0].text,
  },
  {
    icon: Microscope,
    title: WHY_CHOOSE_US[1].title,
    text: WHY_CHOOSE_US[1].text,
  },
  {
    icon: HeartPulse,
    title: WHY_CHOOSE_US[2].title,
    text: WHY_CHOOSE_US[2].text,
  },
  {
    icon: ShieldCheck,
    title: WHY_CHOOSE_US[3].title,
    text: WHY_CHOOSE_US[3].text,
  },
  {
    icon: Layers,
    title: WHY_CHOOSE_US[4].title,
    text: WHY_CHOOSE_US[4].text,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Our Story ── */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-5 animate-fade-up">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Our Story</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-light tracking-tighter text-foreground leading-[0.95] mb-10">
                Born from a<br />
                <span className="italic font-light text-muted-foreground">singular vision.</span>
              </h2>
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  {CLINIC_OVERVIEW}
                </p>
                <p>
                  Our dermatologists take a medical-first approach — investigating underlying causes of skin distress, not only surface symptoms. From dermoscopy and AI-supported skin analysis to precise biopsies, diagnosis guides every treatment plan.
                </p>
                <p>
                  The clinic was designed from the ground up to reflect that philosophy. Every room, every instrument, and every protocol is chosen with clinical intent — bridging advanced dermatology and the artistry of aesthetic medicine.
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-border grid grid-cols-3 gap-6">
                {[
                  { value: "3.2k+", label: "Patients" },
                  { value: "13", label: "Years" },
                  { value: "98%", label: "Satisfaction" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-heading text-3xl font-light text-foreground tracking-tighter">{s.value}</p>
                    <p className="text-[9px] font-black tracking-[0.3em] text-muted-foreground/50 uppercase mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stacked images */}
            <div className="lg:col-span-6 lg:col-start-7 animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={img2} alt="Clinic interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="aspect-square overflow-hidden">
                    <img src={img3} alt="Treatment room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="aspect-square overflow-hidden">
                    <img src={img4} alt="Clinical equipment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-32 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-5 animate-fade-up">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Our Vision</span>
              </div>
              <p className="font-heading text-3xl md:text-4xl font-light tracking-tight text-foreground leading-snug">
                {CLINIC_VISION}
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Our Mission</span>
              </div>
              <ul className="space-y-5">
                {CLINIC_MISSION.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <p className="text-lg text-foreground/80 font-light leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Clinical Approach ── */}
      <section className="py-32 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Clinical Approach</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-light tracking-tighter text-foreground leading-[0.95]">
                Rooted in medical science,<br />
                <span className="italic font-light text-muted-foreground">not surface fixes.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border animate-fade-up" style={{ animationDelay: "80ms" }}>
              {CLINICAL_APPROACH.map((item) => (
                <div key={item.title} className="bg-background p-10 hover:bg-muted/20 transition-colors">
                  <h3 className="font-heading text-xl font-medium text-foreground mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy quote ── */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <div className="text-5xl text-accent/30 font-heading mb-6 leading-none">"</div>
            <blockquote className="font-heading text-2xl md:text-4xl font-light tracking-tight text-foreground leading-[1.3] mb-8">
              We reveal beauty through the precision of cellular health and molecular balance.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-accent/40" />
              <span className="text-[9px] font-black tracking-[0.4em] text-muted-foreground uppercase">Bosphorus Founding Principle</span>
              <div className="h-px w-8 bg-accent/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Clinic space image grid ── */}
      <section className="py-32 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">

            <div className="flex items-end justify-between mb-14 animate-fade-up">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">The Space</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-light tracking-tighter text-foreground leading-[0.95]">
                  Designed for<br />
                  <span className="italic font-light text-muted-foreground">clinical excellence.</span>
                </h2>
              </div>
            </div>

            {/* Bento grid */}
            <div className="grid grid-cols-12 grid-rows-2 gap-3 h-[600px] animate-fade-up" style={{ animationDelay: "100ms" }}>
              {/* Large left */}
              <div className="col-span-5 row-span-2 overflow-hidden">
                <img src={img5} alt="Main treatment area" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Top middle */}
              <div className="col-span-4 row-span-1 overflow-hidden">
                <img src={img6} alt="Consultation room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Top right */}
              <div className="col-span-3 row-span-1 overflow-hidden">
                <img src={img7} alt="Reception" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Bottom middle */}
              <div className="col-span-3 row-span-1 overflow-hidden">
                <img src={img8} alt="Equipment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Bottom right */}
              <div className="col-span-4 row-span-1 overflow-hidden">
                <img src={img9} alt="Clinic detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Official Brand Ambassadors ── */}
      <AmbassadorSection />

      {/* ── Slidable Medical Specialists (Staff section hidden per request) ── */}
      {/* <TeamSection /> */}

      {/* ── Pillars: What We Stand For ── */}
      <section className="py-28 md:py-36 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20 animate-fade-up">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase">Our Principles</span>
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.02]">
                  What we <br />
                  <span className="italic font-light text-muted-foreground">stand for.</span>
                </h2>
              </div>
              <p className="text-muted-foreground font-light text-sm md:text-base max-w-md leading-relaxed">
                Every decision at Bosphorus is guided by clinical integrity — ensuring every patient receives dermatological care that is medically sound and deeply respectful.
              </p>
            </div>

            {/* 5 Principles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                const num = String(index + 1).padStart(2, "0");
                const isFeatured = index === 0;

                return (
                  <div
                    key={index}
                    className={`group border border-border p-8 flex flex-col justify-between hover:border-accent/50 hover:bg-muted/20 transition-all duration-300 shadow-sm animate-fade-up ${
                      isFeatured ? "bg-card lg:col-span-2 sm:col-span-2" : "bg-card"
                    }`}
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono font-bold text-accent tracking-widest">
                          {num} / 05
                        </span>
                        <div className="w-9 h-9 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                          <Icon className="h-4 w-4 text-accent" />
                        </div>
                      </div>

                      <h3 className={`font-heading font-medium tracking-tight text-foreground mb-3 group-hover:text-accent transition-colors ${
                        isFeatured ? "text-2xl md:text-3xl" : "text-xl"
                      }`}>
                        {pillar.title}
                      </h3>

                      <p className={`text-muted-foreground font-light leading-relaxed ${
                        isFeatured ? "text-sm md:text-base max-w-xl" : "text-xs md:text-sm"
                      }`}>
                        {pillar.text}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between">
                      <span className="text-[8px] font-black tracking-widest text-muted-foreground uppercase">
                        Clinical Pillar
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── Final image + CTA ── */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <img
          src={img10}
          alt="Bosphorus Dermatology"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-accent/90 backdrop-blur-[2px]" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-2xl animate-fade-up">
            <h2 className="font-heading text-5xl md:text-6xl font-light tracking-tighter text-white leading-[0.95] mb-8">
              Ready to experience<br />
              <span className="font-medium">the difference?</span>
            </h2>
            <p className="text-white/80 font-light text-lg leading-relaxed mb-12 max-w-lg">
              Book a private consultation with one of our board-certified specialists. We'll assess your needs and build a protocol designed specifically for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="rounded-none h-14 px-10 text-[11px] font-black tracking-[0.25em] bg-white hover:bg-white/95 text-accent border-0 shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] group"
                >
                  BOOK CONSULTATION
                  <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-none h-14 px-10 text-[11px] font-black tracking-[0.25em] text-white hover:text-white hover:bg-white/10 border border-white/30 hover:border-white/50 uppercase transition-all"
                >
                  View Treatments
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
