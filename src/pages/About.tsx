import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Stethoscope, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    title: "Clinical Roots",
    text: "Founded by board-certified specialists with decades of experience in international diagnostic standard centers.",
  },
  {
    icon: ShieldCheck,
    title: "FDA Protocols",
    text: "We exclusively utilize FDA-cleared technology and pharmaceutical-grade ingredients in every clinical pathway.",
  },
  {
    icon: Zap,
    title: "High Precision",
    text: "Every aesthetic intervention is viewed through a lens of anatomical accuracy and molecular balance.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    text: "Bridging the gap between European medical rigor and Addis Ababa's renowned aesthetic expertise.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero — full bleed clinic image ── */}
      <section className="relative h-[90vh] flex items-end overflow-hidden">
        <img
          src={img1}
          alt="Bosphorus Dermatology Clinic"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,17%,8%)] via-[hsl(210,17%,8%)]/40 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 pb-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8 animate-fade-up">
              <div className="h-px w-8 bg-accent/70" />
              <span className="text-[10px] font-black tracking-[0.5em] text-accent uppercase">
                About Bosphorus
              </span>
            </div>
            <h1 className="font-heading text-6xl md:text-8xl font-light tracking-tighter text-white leading-[0.92] animate-fade-up mb-6"
              style={{ animationDelay: "80ms" }}>
              Where precision<br />
              <span className="italic text-white/40 font-light">meets</span>{" "}
              <span className="font-medium">care.</span>
            </h1>
            <p className="text-white/55 text-xl font-light leading-relaxed max-w-2xl animate-fade-up"
              style={{ animationDelay: "160ms" }}>
              Addis Ababa's premier private clinic for evidence-based dermatology and aesthetic medicine — built on the principle that every patient deserves surgical-grade precision.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-32 bg-background border-b border-border">
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
                  Bosphorus Dermatology was founded with one conviction: that world-class dermatological care should be accessible in Addis Ababa. Not a compromise — the real thing.
                </p>
                <p>
                  Our specialists trained at internationally accredited institutions and bring that standard to every consultation, every procedure, every follow-up. We treat the skin as the complex biological system it is — not a surface to be managed, but a system to be understood.
                </p>
                <p>
                  The clinic was designed from the ground up to reflect that philosophy. Every room, every instrument, every protocol is chosen with clinical intent.
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

      {/* ── Pillars ── */}
      <section className="py-32 bg-[hsl(210,17%,11%)] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 animate-fade-up">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8 bg-accent/60" />
                  <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Our Principles</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-light tracking-tighter text-white leading-[0.95]">
                  What we<br />
                  <span className="italic font-light text-white/35">stand for.</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 flex items-end">
                <p className="text-white/45 font-light leading-relaxed">
                  Every decision at Bosphorus is guided by four non-negotiable principles that define how we practice medicine and serve our patients.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="group bg-[hsl(210,17%,11%)] p-10 hover:bg-white/5 transition-colors duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="mb-8 w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-300">
                    <pillar.icon className="h-4 w-4 text-white/40 group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-lg font-medium mb-3 tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-white/45 font-light leading-relaxed text-sm">
                    {pillar.text}
                  </p>
                </div>
              ))}
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
        <div className="absolute inset-0 bg-[hsl(210,17%,8%)]/75" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-2xl animate-fade-up">
            <h2 className="font-heading text-5xl md:text-6xl font-light tracking-tighter text-white leading-[0.95] mb-8">
              Ready to experience<br />
              <span className="font-medium">the difference?</span>
            </h2>
            <p className="text-white/50 font-light text-lg leading-relaxed mb-12 max-w-lg">
              Book a private consultation with one of our board-certified specialists. We'll assess your needs and build a protocol designed specifically for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="rounded-none h-14 px-10 text-[11px] font-black tracking-[0.25em] bg-accent hover:bg-accent/90 text-accent-foreground border-0 shadow-none transition-all hover:scale-[1.02] active:scale-[0.98] group"
                >
                  BOOK CONSULTATION
                  <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-none h-14 px-10 text-[11px] font-black tracking-[0.25em] text-white/60 hover:text-white hover:bg-white/8 border border-white/15 hover:border-white/30 uppercase transition-all"
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
